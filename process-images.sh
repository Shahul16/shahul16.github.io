#!/bin/bash

# Image Processing Script for Portfolio Website
# This script helps resize and optimize profile images for web
# Usage: ./process-images.sh /path/to/original/image.jpg

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}Profile Image Processing Tool${NC}"
echo -e "${BLUE}================================${NC}\n"

# Check if input file is provided
if [ $# -eq 0 ]; then
    echo -e "${YELLOW}Usage: $0 /path/to/image.jpg${NC}"
    echo -e "${YELLOW}Example: $0 ~/Downloads/profile.jpg${NC}"
    exit 1
fi

INPUT_FILE="$1"
IMAGE_DIR="/Users/shahul/Downloads/shahul16.github.io/images"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo -e "\033[0;31mError: File not found: $INPUT_FILE\033[0m"
    exit 1
fi

# Check if images directory exists
if [ ! -d "$IMAGE_DIR" ]; then
    echo -e "\033[0;31mError: Images directory not found: $IMAGE_DIR\033[0m"
    exit 1
fi

echo -e "${GREEN}✓ Input file found: $INPUT_FILE${NC}"
echo -e "${GREEN}✓ Output directory: $IMAGE_DIR${NC}\n"

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo -e "\033[0;31m✗ ImageMagick not found!${NC}"
    echo -e "${YELLOW}Install with: brew install imagemagick${NC}"
    exit 1
fi

echo -e "${BLUE}Processing images...${NC}\n"

# Standard size (1x)
echo -e "${YELLOW}Creating standard image (400px width)...${NC}"
convert "$INPUT_FILE" \
    -resize 400x600 \
    -quality 85 \
    -interlace Plane \
    "$IMAGE_DIR/about-photo.jpg"

if [ $? -eq 0 ]; then
    SIZE_1X=$(ls -lh "$IMAGE_DIR/about-photo.jpg" | awk '{print $5}')
    echo -e "${GREEN}✓ Created: about-photo.jpg ($SIZE_1X)${NC}\n"
else
    echo -e "\033[0;31m✗ Failed to create standard image${NC}"
    exit 1
fi

# 2x High-DPI size
echo -e "${YELLOW}Creating 2x image (800px width)...${NC}"
convert "$INPUT_FILE" \
    -resize 800x1200 \
    -quality 85 \
    -interlace Plane \
    "$IMAGE_DIR/about-photo@2x.jpg"

if [ $? -eq 0 ]; then
    SIZE_2X=$(ls -lh "$IMAGE_DIR/about-photo@2x.jpg" | awk '{print $5}')
    echo -e "${GREEN}✓ Created: about-photo@2x.jpg ($SIZE_2X)${NC}\n"
else
    echo -e "\033[0;31m✗ Failed to create 2x image${NC}"
    exit 1
fi

# Summary
echo -e "${BLUE}================================${NC}"
echo -e "${GREEN}✓ Image Processing Complete!${NC}"
echo -e "${BLUE}================================${NC}\n"

echo -e "${GREEN}Files created:${NC}"
ls -lh "$IMAGE_DIR"/about-photo*.jpg 2>/dev/null

echo -e "\n${GREEN}Next steps:${NC}"
echo -e "1. Open index.html in your browser"
echo -e "2. Scroll to About section"
echo -e "3. Verify your new photo displays correctly"
echo -e "4. Test on mobile device"
echo -e "\n${GREEN}Done! Your profile image is ready. 🎉${NC}"
