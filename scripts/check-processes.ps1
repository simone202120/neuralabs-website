# Diagnostic script to check Node.js processes and occupied ports

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Next.js Development Environment Check" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Check Node.js processes
Write-Host "[*] Node.js Processes:" -ForegroundColor Yellow
$nodeProcesses = Get-Process -Name node -ErrorAction SilentlyContinue

if ($nodeProcesses) {
    Write-Host "Found $($nodeProcesses.Count) Node.js processes:`n" -ForegroundColor White

    foreach ($proc in $nodeProcesses) {
        try {
            $cmdLine = (Get-CimInstance Win32_Process -Filter "ProcessId = $($proc.Id)").CommandLine
            $isNextJs = $cmdLine -match "next" -or $cmdLine -match "neuralabs-website"

            Write-Host "  PID: $($proc.Id)" -ForegroundColor $(if ($isNextJs) { "Red" } else { "Gray" })
            Write-Host "  Memory: $([math]::Round($proc.WorkingSet64 / 1MB, 2)) MB" -ForegroundColor Gray
            if ($cmdLine) {
                $shortCmd = if ($cmdLine.Length -gt 80) { $cmdLine.Substring(0, 77) + "..." } else { $cmdLine }
                Write-Host "  Command: $shortCmd" -ForegroundColor Gray
            }
            if ($isNextJs) {
                Write-Host "  [WARNING] This appears to be a Next.js process" -ForegroundColor Red
            }
            Write-Host ""
        } catch {
            Write-Host "  PID: $($proc.Id) - no command line info" -ForegroundColor Gray
            Write-Host ""
        }
    }
} else {
    Write-Host "[OK] No Node.js processes running" -ForegroundColor Green
}

Write-Host "`n----------------------------------------`n" -ForegroundColor Cyan

# Check occupied ports in the 3000-3020 range
Write-Host "[*] Occupied Ports (3000-3020):" -ForegroundColor Yellow
$ports = 3000..3020
$occupiedPorts = @()

foreach ($port in $ports) {
    $connections = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    if ($connections) {
        foreach ($conn in $connections) {
            $processId = $conn.OwningProcess
            $process = Get-Process -Id $processId -ErrorAction SilentlyContinue

            $occupiedPorts += @{
                Port = $port
                PID = $processId
                ProcessName = if ($process) { $process.Name } else { "Unknown" }
            }
        }
    }
}

if ($occupiedPorts.Count -eq 0) {
    Write-Host "[OK] No ports occupied in range 3000-3020" -ForegroundColor Green
} else {
    Write-Host "Found $($occupiedPorts.Count) occupied ports:`n" -ForegroundColor White

    foreach ($portInfo in $occupiedPorts) {
        Write-Host "  Port $($portInfo.Port): $($portInfo.ProcessName) (PID: $($portInfo.PID))" -ForegroundColor $(if ($portInfo.ProcessName -eq "node") { "Red" } else { "Yellow" })
    }
}

Write-Host "`n========================================`n" -ForegroundColor Cyan

# Recommendations
if ($nodeProcesses.Count -gt 1 -or $occupiedPorts.Count -gt 0) {
    Write-Host "[!] Recommendations:" -ForegroundColor Cyan
    Write-Host "  - Run 'npm run kill' to clean up zombie processes" -ForegroundColor White
    Write-Host "  - Use 'npm run dev:safe' to start with automatic cleanup" -ForegroundColor White
    Write-Host "  - Use 'kill-and-dev.bat' for a quick restart`n" -ForegroundColor White
} else {
    Write-Host "[OK] Everything looks clean! You're good to run 'npm run dev'`n" -ForegroundColor Green
}
