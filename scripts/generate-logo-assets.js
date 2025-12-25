#!/usr/bin/env node

/**
 * Script to generate all logo assets (favicon, touch icons, OG image)
 * from the SVG source files
 *
 * Requirements: npm install sharp (install with: npm install --save-dev sharp)
 * Usage: node scripts/generate-logo-assets.js
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const ROOT_DIR = path.join(__dirname, '..')
const PUBLIC_DIR = path.join(ROOT_DIR, 'public')
const OG_DIR = path.join(PUBLIC_DIR, 'og')
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images')

// Ensure directories exist
if (!fs.existsSync(OG_DIR)) {
  fs.mkdirSync(OG_DIR, { recursive: true })
}

// SVG sources
const SVG_DARK = path.join(IMAGES_DIR, 'logo-crucible-dark.svg')
const SVG_LIGHT = path.join(IMAGES_DIR, 'logo-crucible-light.svg')
const SVG_SIMPLE = path.join(IMAGES_DIR, 'logo-crucible.svg')

async function generateAssets() {
  console.log('🎨 Generating logo assets...\n')

  try {
    // 1. Favicon (multi-size ICO alternative: generate PNG set)
    console.log('📌 Generating favicon.ico alternatives...')
    await sharp(SVG_SIMPLE)
      .resize(32, 32)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'))

    await sharp(SVG_SIMPLE)
      .resize(16, 16)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'))

    console.log('   ✓ favicon-16x16.png')
    console.log('   ✓ favicon-32x32.png')
    console.log('   ℹ️  Note: Use https://realfavicongenerator.net to create favicon.ico from these PNGs\n')

    // 2. Apple Touch Icon (180x180)
    console.log('🍎 Generating Apple Touch Icon...')
    const appleTouchIconSize = 180
    const applePadding = 20
    const appleIconSize = appleTouchIconSize - (applePadding * 2)

    await sharp({
      create: {
        width: appleTouchIconSize,
        height: appleTouchIconSize,
        channels: 4,
        background: { r: 26, g: 26, b: 26, alpha: 1 }
      }
    })
      .composite([{
        input: await sharp(SVG_DARK)
          .resize(appleIconSize, appleIconSize)
          .toBuffer(),
        top: applePadding,
        left: applePadding
      }])
      .png()
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'))

    console.log('   ✓ apple-touch-icon.png (180x180)\n')

    // 3. Android Chrome Icons
    console.log('🤖 Generating Android Chrome icons...')

    // 192x192
    const android192Size = 192
    const android192Padding = Math.floor(android192Size * 0.1)
    const android192IconSize = android192Size - (android192Padding * 2)

    await sharp({
      create: {
        width: android192Size,
        height: android192Size,
        channels: 4,
        background: { r: 26, g: 26, b: 26, alpha: 1 }
      }
    })
      .composite([{
        input: await sharp(SVG_DARK)
          .resize(android192IconSize, android192IconSize)
          .toBuffer(),
        top: android192Padding,
        left: android192Padding
      }])
      .png()
      .toFile(path.join(PUBLIC_DIR, 'android-chrome-192x192.png'))

    console.log('   ✓ android-chrome-192x192.png')

    // 512x512
    const android512Size = 512
    const android512Padding = Math.floor(android512Size * 0.1)
    const android512IconSize = android512Size - (android512Padding * 2)

    await sharp({
      create: {
        width: android512Size,
        height: android512Size,
        channels: 4,
        background: { r: 26, g: 26, b: 26, alpha: 1 }
      }
    })
      .composite([{
        input: await sharp(SVG_DARK)
          .resize(android512IconSize, android512IconSize)
          .toBuffer(),
        top: android512Padding,
        left: android512Padding
      }])
      .png()
      .toFile(path.join(PUBLIC_DIR, 'android-chrome-512x512.png'))

    console.log('   ✓ android-chrome-512x512.png\n')

    // 4. Open Graph Image (1200x630)
    console.log('📱 Generating Open Graph image...')
    const ogWidth = 1200
    const ogHeight = 630
    const logoSize = 400
    const logoX = 100
    const logoY = (ogHeight - logoSize) / 2

    // Create gradient background
    const gradient = Buffer.from(
      `<svg width="${ogWidth}" height="${ogHeight}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1A1A1A;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#2A2A2A;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="${ogWidth}" height="${ogHeight}" fill="url(#grad)" />
      </svg>`
    )

    // Text overlay SVG
    const textSvg = Buffer.from(
      `<svg width="${ogWidth}" height="${ogHeight}">
        <text x="600" y="280" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="bold" fill="#FF6B35">SigmaLabs</text>
        <text x="600" y="350" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#FFFDF9">Il laboratorio dove nascono le idee intelligenti</text>
      </svg>`
    )

    await sharp(gradient)
      .composite([
        {
          input: await sharp(SVG_DARK)
            .resize(logoSize, logoSize)
            .toBuffer(),
          top: Math.floor(logoY),
          left: logoX
        },
        {
          input: textSvg,
          top: 0,
          left: 0
        }
      ])
      .png({ quality: 90 })
      .toFile(path.join(OG_DIR, 'og-default.png'))

    console.log('   ✓ og/og-default.png (1200x630)\n')

    console.log('✅ All assets generated successfully!')
    console.log('\n📝 Next steps:')
    console.log('   1. Visit https://realfavicongenerator.net')
    console.log('   2. Upload favicon-32x32.png to generate favicon.ico')
    console.log('   3. Replace public/favicon.ico with the generated file')
    console.log('   4. Test the site to verify all icons display correctly\n')

  } catch (error) {
    console.error('❌ Error generating assets:', error)
    process.exit(1)
  }
}

// Check if sharp is installed
try {
  require.resolve('sharp')
  generateAssets()
} catch (e) {
  console.error('❌ Error: "sharp" package is not installed')
  console.log('\n📦 Install sharp with:')
  console.log('   npm install --save-dev sharp')
  console.log('\nThen run this script again.')
  process.exit(1)
}
