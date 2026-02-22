@echo off
REM Image Processing Script for Windows
REM This script helps resize profile images for web
REM Usage: process-images.bat C:\path\to\image.jpg

setlocal enabledelayedexpansion

echo.
echo ================================
echo Profile Image Processing Tool
echo ================================
echo.

REM Check if ImageMagick is installed
where magick >nul 2>nul
if errorlevel 1 (
    echo Error: ImageMagick not found!
    echo.
    echo Install from: https://imagemagick.org/script/download.php
    echo Or: choco install imagemagick (if using Chocolatey)
    pause
    exit /b 1
)

REM Check if input file is provided
if "%~1"=="" (
    echo Usage: %0 C:\path\to\image.jpg
    echo.
    pause
    exit /b 1
)

REM Check if input file exists
if not exist "%~1" (
    echo Error: File not found: %~1
    pause
    exit /b 1
)

set INPUT_FILE=%~1
set IMAGE_DIR=C:\Users\shahul\Downloads\shahul16.github.io\images

REM Check if images directory exists
if not exist "%IMAGE_DIR%" (
    echo Error: Images directory not found: %IMAGE_DIR%
    pause
    exit /b 1
)

echo Input file: %INPUT_FILE%
echo Output directory: %IMAGE_DIR%
echo.
echo Processing images...
echo.

REM Create standard size (1x)
echo Creating standard image (400px width)...
magick convert "%INPUT_FILE%" -resize 400x600 -quality 85 -interlace Plane "%IMAGE_DIR%\about-photo.jpg"

if errorlevel 1 (
    echo Error: Failed to create standard image
    pause
    exit /b 1
) else (
    echo Created: about-photo.jpg
)

REM Create 2x High-DPI size
echo Creating 2x image (800px width)...
magick convert "%INPUT_FILE%" -resize 800x1200 -quality 85 -interlace Plane "%IMAGE_DIR%\about-photo@2x.jpg"

if errorlevel 1 (
    echo Error: Failed to create 2x image
    pause
    exit /b 1
) else (
    echo Created: about-photo@2x.jpg
)

echo.
echo ================================
echo Image Processing Complete!
echo ================================
echo.
echo Files created in: %IMAGE_DIR%
echo.
echo Next steps:
echo 1. Open index.html in your browser
echo 2. Scroll to About section
echo 3. Verify your new photo displays correctly
echo.
echo Done! Your profile image is ready.
echo.
pause
