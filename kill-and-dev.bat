@echo off
echo.
echo ========================================
echo   Cleaning up zombie Node.js processes
echo ========================================
echo.

powershell -ExecutionPolicy Bypass -File "./scripts/kill-dev-processes.ps1"

echo.
echo ========================================
echo   Starting Next.js dev server
echo ========================================
echo.

npm run dev
