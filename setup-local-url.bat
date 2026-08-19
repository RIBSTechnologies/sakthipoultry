@echo off
net session >nul 2>&1
if %errorLevel% neq 0 (
  echo Right-click this file and choose "Run as administrator".
  pause
  exit /b 1
)

findstr /C:"sakthipoultry.local" %SystemRoot%\System32\drivers\etc\hosts >nul
if %errorLevel% neq 0 (
  echo 127.0.0.1 sakthipoultry.local>> %SystemRoot%\System32\drivers\etc\hosts
  echo Added sakthipoultry.local to the hosts file.
) else (
  echo Hosts entry already exists.
)

net stop wampapache64
net start wampapache64

echo.
echo Open: http://sakthipoultry.local
echo Keep "npm run dev" running in the project folder.
pause
