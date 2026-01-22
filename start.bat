@echo off
echo Starting the project...
echo.

echo Installing/verifying dependencies...
echo.
pnpm install
echo.

if %errorlevel% neq 0 (
    echo Failed to install dependencies!
    pause
    exit /b %errorlevel%
)

echo Starting development server...
echo.
pnpm dev
