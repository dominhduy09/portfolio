# Adding Custom Images to Your Portfolio Slideshow

## Option 1: Use Your Own Images (Recommended)

1. Create a `public/images/slideshow/` directory in your project:
   ```bash
   mkdir -p public/images/slideshow
   ```

2. Add your images (JPEG, PNG, WebP) to this folder:
   ```
   public/images/slideshow/
   ├── slide1.jpg
   ├── slide2.jpg
   ├── slide3.jpg
   └── slide4.jpg
   ```

3. Update the `slideshowImages` array in `src/components/Hero.tsx`:
   ```typescript
   const slideshowImages = [
     '/images/slideshow/slide1.jpg',
     '/images/slideshow/slide2.jpg',
     '/images/slideshow/slide3.jpg',
     '/images/slideshow/slide4.jpg',
   ];
   ```

## Option 2: Use URLs (Current Setup)

The portfolio is currently using Unsplash images as placeholders. These will work without any additional setup, but you should replace them with your own images for a personal touch.

## Image Guidelines

- **Resolution**: 1920x1080 or higher for best quality
- **Format**: JPEG (smaller file size) or PNG (better quality)
- **File Size**: Keep under 500KB each for faster loading
- **Subject**: Technology, coding, workspace, or abstract backgrounds
- **Contrast**: Choose images that work well with text overlay

## Tips for Best Results

1. **Optimize your images** before adding them:
   - Use tools like TinyPNG, Squoosh, or ImageOptim
   - Aim for 200-400KB per image

2. **Choose cohesive images** that:
   - Have similar color tones
   - Don't distract from the text
   - Represent your personal brand

3. **Test in both themes**:
   - Switch between light and dark mode
   - Ensure text remains readable

## Customizing the Slideshow

In `src/components/Hero.tsx`, you can adjust:

```typescript
<Slideshow 
  images={slideshowImages} 
  interval={6000} // Change duration (milliseconds)
/>
```

- **interval**: Time each slide shows (default: 6000ms = 6 seconds)
- **images**: Array of image URLs or paths
