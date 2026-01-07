#!/bin/bash
# Creates placeholder gradient images for the slideshow
cd public/images/slideshow

# Create SVG placeholders that work immediately
for i in {1..5}; do
  colors=(
    "1e3a8a:3b82f6:Code"
    "4c1d95:8b5cf6:Design" 
    "065f46:10b981:Build"
    "7c2d12:f97316:Deploy"
    "831843:ec4899:Create"
  )
  
  IFS=':' read -r bg accent name <<< "${colors[$i-1]}"
  
  cat > "slide-${i}.svg" << SVGEOF
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#${bg};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#${accent};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#grad${i})"/>
  <text x="960" y="540" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="white" text-anchor="middle" opacity="0.3">${name}</text>
  <text x="960" y="680" font-family="Arial, sans-serif" font-size="40" fill="white" text-anchor="middle" opacity="0.2">Portfolio Background ${i}</text>
</svg>
SVGEOF
done

echo "Created 5 placeholder SVG images"
ls -lh *.svg
