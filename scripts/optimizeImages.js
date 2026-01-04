const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images');
const SIZES = [320, 640, 1024, 1920]; // Responsive breakpoints
const QUALITY = 85; // WebP quality (0-100)

// Images to optimize (project images and important assets)
const PRIORITY_IMAGES = [
  'BudgetApp.png',
  'LaravelPortfolio.png',
  'AnimalShelter.png',
  'RemaxClone.png',
  'BonjourSante.png',
  'auctions.png',
  'f7ad9720-7002-4c57-8d44-0405b7e00ee2.jpg', // Profile image
  'vector1.jpg', // Background
];

async function optimizeImage(imagePath, outputDir) {
  const ext = path.extname(imagePath);
  const basename = path.basename(imagePath, ext);
  const relativePath = path.relative(PUBLIC_DIR, imagePath);

  console.log(`📸 Optimizing: ${relativePath}`);

  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    // Generate WebP versions at different sizes
    for (const size of SIZES) {
      // Only resize if image is larger than target size
      if (metadata.width >= size) {
        const outputPath = path.join(
          outputDir,
          `${basename}-${size}w.webp`
        );

        await image
          .resize(size, null, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .webp({ quality: QUALITY })
          .toFile(outputPath);

        const stats = fs.statSync(outputPath);
        console.log(`  ✅ ${size}w → ${(stats.size / 1024).toFixed(1)}KB`);
      }
    }

    // Always create full-size WebP
    const fullSizePath = path.join(outputDir, `${basename}.webp`);
    await image.webp({ quality: QUALITY }).toFile(fullSizePath);

    const originalSize = fs.statSync(imagePath).size;
    const newSize = fs.statSync(fullSizePath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`  ✅ Full size → ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)\n`);
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}\n`);
  }
}

async function optimizeBookCovers(bookDir) {
  if (!fs.existsSync(bookDir)) {
    console.log('📚 No book covers directory found, skipping...\n');
    return;
  }

  const books = fs.readdirSync(bookDir).filter((file) => {
    return /\.(jpg|jpeg|png)$/i.test(file);
  });

  console.log(`📚 Optimizing ${books.length} book covers...\n`);

  for (const book of books) {
    const bookPath = path.join(bookDir, book);
    await optimizeImage(bookPath, bookDir);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`Quality: ${QUALITY}%`);
  console.log(`Sizes: ${SIZES.join('w, ')}w\n`);
  console.log('━'.repeat(50) + '\n');

  // Optimize priority images (project screenshots)
  console.log('🎨 Optimizing project images...\n');
  for (const img of PRIORITY_IMAGES) {
    const imgPath = path.join(PUBLIC_DIR, img);
    if (fs.existsSync(imgPath)) {
      await optimizeImage(imgPath, PUBLIC_DIR);
    } else {
      console.log(`⚠️  Not found: ${img}\n`);
    }
  }

  // Optimize book covers
  const bookDir = path.join(PUBLIC_DIR, 'readBooks');
  await optimizeBookCovers(bookDir);

  console.log('━'.repeat(50));
  console.log('✨ Image optimization complete!');
  console.log('\n💡 Next steps:');
  console.log('   1. Use the ResponsiveImage component in your React components');
  console.log('   2. Test the images in your browser');
  console.log('   3. Consider removing old PNG/JPG files after verifying WebP works');
}

main().catch(console.error);
