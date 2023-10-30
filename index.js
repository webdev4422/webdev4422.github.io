const fs = require('fs')
const path = require('path')
const minify = require('html-minifier').minify
const sharp = require('sharp')

// Define source and destination directories, file extension, and tag files directory
const pagesDir = './src/pages/'
const componentsDir = './src/components/'
const assetsDir = './src/assets/img/jpg'
const distDir = './docs/'
const distAssetsDir = './docs/assets/img/'
const htmlFileExtension = '.html'

// Create dir if it doesnt exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// Start replacing
console.log(`Start replacing corresponding tags for all pages in ${pagesDir} 🔨 \n`)

// Read and replace tags in a given HTML file
function replaceTagsInFile(srcPath, distPath) {
  let htmlContent = fs.readFileSync(srcPath, 'utf-8')
  const tagRegex = /<(\w+-x) \/>/g

  const matches = htmlContent.match(tagRegex)
  if (matches) {
    matches.forEach((match) => {
      const tagName = match.match(/\w+-x/)[0]
      const fileName = `${tagName}${htmlFileExtension}`
      const filePath = path.join(componentsDir, fileName)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      htmlContent = htmlContent.replace(match, fileContent)
    })
    fs.writeFileSync(distPath, htmlContent, 'utf-8')
  }
}

// Get a list of all HTML files in the source directory
const htmlFiles = fs
  .readdirSync(pagesDir)
  .filter((file) => path.extname(file) === htmlFileExtension)

// Process each HTML file
htmlFiles.forEach((fileName) => {
  const srcFilePath = path.join(pagesDir, fileName)
  const distFilePath = path.join(distDir, fileName)
  replaceTagsInFile(srcFilePath, distFilePath)
  console.log(`Replaced tags in ${fileName} and saved to dist directory.`)
})

console.log(`Tags replaced in all HTML pages and saved to the ${distDir} directory. 👍 \n`)

// /* ************************************************************************************** */
// // Start optimization
// console.log(`Start optimization all pages in ${distDir} 🔨 \n`)

// // Optimize HTML in a given file
// function optimizeHtmlFile(filePath) {
//   let htmlContent = fs.readFileSync(filePath, 'utf-8')
//   const minifiedHtml = minify(htmlContent, {
//     collapseWhitespace: true,
//     removeComments: true,
//     minifyJS: true,
//     minifyCSS: true,
//   })
//   fs.writeFileSync(filePath, minifiedHtml, 'utf-8')
// }

// // Get a list of all HTML files in the dist directory
// const distFiles = fs.readdirSync(distDir).filter((file) => path.extname(file) === htmlFileExtension)

// // Process each HTML file in the dist directory
// distFiles.forEach((fileName) => {
//   const distFilePath = path.join(distDir, fileName)
//   optimizeHtmlFile(distFilePath)
//   console.log(`Optimized ${fileName} in the dist directory.`)
// })

// console.log(`HTML optimization completed for all HTML files in the ${distDir} directory. 👍 \n`)

/* ************************************************************************************** */
// Start optimization of images
console.log(`Start images conversion in ${assetsDir} with sharp 🔨 \n`)

// Create dir if it doesnt exists
if (!fs.existsSync(distAssetsDir)) {
  fs.mkdirSync(distAssetsDir, { recursive: true })
}

// List all files in the source directory
const files = fs.readdirSync(assetsDir)

// Process each image file
files.forEach(async (file) => {
  const sourceFilePath = path.join(assetsDir, file)

  // Check if the file is a JPG or PNG
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    const outputFilePath = path.join(distAssetsDir, `${file.split('.')[0]}.webp`)

    try {
      await sharp(sourceFilePath).toFormat('webp', { quality: 20 }).toFile(outputFilePath)

      console.log(`Converted ${file} to WebP.`)
    } catch (err) {
      console.error(`Error converting ${file} to WebP: ${err.message}`)
    }
  }
})

console.log(`Image conversion completed in ${distAssetsDir} 👍`)
