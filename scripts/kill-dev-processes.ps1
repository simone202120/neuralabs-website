# Kill all Node.js processes related to Next.js dev server
# This script ensures no zombie processes remain

Write-Host "[*] Searching for Next.js dev processes..." -ForegroundColor Cyan

# Kill all processes listening on ports 3000-3020
$ports = 3000..3020
$killedProcesses = @()

foreach ($port in $ports) {
    $connections = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    foreach ($conn in $connections) {
        $processId = $conn.OwningProcess
        if ($processId -and $processId -notin $killedProcesses) {
            try {
                $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
                if ($process) {
                    Write-Host "[!] Killing process $($process.Name) (PID: $processId) on port $port" -ForegroundColor Yellow
                    Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
                    $killedProcesses += $processId
                }
            } catch {
                # Process already terminated
            }
        }
    }
}

# Kill any remaining Node.js processes that might be related to Next.js
$nodeProcesses = Get-Process -Name node -ErrorAction SilentlyContinue
foreach ($proc in $nodeProcesses) {
    try {
        $cmdLine = (Get-CimInstance Win32_Process -Filter "ProcessId = $($proc.Id)").CommandLine
        if ($cmdLine -match "next" -or $cmdLine -match "neuralabs-website") {
            if ($proc.Id -notin $killedProcesses) {
                Write-Host "[!] Killing Next.js process (PID: $($proc.Id))" -ForegroundColor Yellow
                Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
                $killedProcesses += $proc.Id
            }
        }
    } catch {
        # Process already terminated or no command line available
    }
}

if ($killedProcesses.Count -eq 0) {
    Write-Host "[OK] No dev processes found running" -ForegroundColor Green
} else {
    Write-Host "[OK] Killed $($killedProcesses.Count) processes" -ForegroundColor Green
    # Wait a moment for ports to be released
    Start-Sleep -Seconds 2
}

Write-Host "[*] Ready to start fresh!" -ForegroundColor Cyan
