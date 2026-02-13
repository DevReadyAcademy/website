import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read blog posts
const blogPostsModule = await import('./src/data/blogPosts.js');
const blogPosts = blogPostsModule.blogPosts;

// Read the base index.html
const indexPath = path.join(__dirname, 'dist', 'index.html');

// Check if dist directory exists
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  console.error('Error: dist directory not found. Run "npm run build" first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf-8');

// Create a devpress directory in dist
const devpressDir = path.join(__dirname, 'dist', 'devpress');
if (!fs.existsSync(devpressDir)) {
  fs.mkdirSync(devpressDir, { recursive: true });
}

// Generate index.html for /devpress page
const devpressDescription = "Read our latest articles on software engineering, career development, and breaking into the tech industry. Practical advice from experienced engineers.";
const devpressIndexHtml = baseHtml
  .replace(
    /<title>[^<]*<\/title>/,
    `<title>DevPress - Tech Insights & Career Advice | DevReady</title>`
  )
  .replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${devpressDescription}" />`
  )
  .replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="DevPress - Tech Insights & Career Advice" />`
  )
  .replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${devpressDescription}" />`
  )
  .replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="https://www.devready.gr/devpress" />`
  )
  .replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="https://www.devready.gr/devpress" />`
  )
  .replace(
    /<meta property="twitter:title" content="[^"]*" \/>/,
    `<meta property="twitter:title" content="DevPress - Tech Insights & Career Advice" />`
  )
  .replace(
    /<meta property="twitter:description" content="[^"]*" \/>/,
    `<meta property="twitter:description" content="${devpressDescription}" />`
  );

fs.writeFileSync(path.join(devpressDir, 'index.html'), devpressIndexHtml);
console.log('Generated: /devpress/index.html');

// Generate HTML for each blog post
blogPosts.forEach(post => {
  const ogImage = post.image ? `https://www.devready.gr${post.image}` : 'https://www.devready.gr/assets/logo-320.webp';

  let html = baseHtml
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${post.titleGr}" />`
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${post.excerptGr.replace(/"/g, '&quot;')}" />`
    )
    .replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      `<meta property="og:image" content="${ogImage}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="https://www.devready.gr/devpress/${post.slug}" />`
    )
    .replace(
      /<meta property="og:type" content="[^"]*" \/>/,
      `<meta property="og:type" content="article" />`
    )
    .replace(
      /<meta property="twitter:title" content="[^"]*" \/>/,
      `<meta property="twitter:title" content="${post.titleGr}" />`
    )
    .replace(
      /<meta property="twitter:description" content="[^"]*" \/>/,
      `<meta property="twitter:description" content="${post.excerptGr.replace(/"/g, '&quot;')}" />`
    )
    .replace(
      /<meta property="twitter:image" content="[^"]*" \/>/,
      `<meta property="twitter:image" content="${ogImage}" />`
    )
    .replace(
      /<meta property="twitter:url" content="[^"]*" \/>/,
      `<meta property="twitter:url" content="https://www.devready.gr/devpress/${post.slug}" />`
    )
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${post.titleGr} | DevPress | DevReady</title>`
    )
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${post.excerptGr.replace(/"/g, '&quot;')}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="https://www.devready.gr/devpress/${post.slug}" />`
    );

  // Create directory for this blog post
  const postDir = path.join(devpressDir, post.slug);
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }

  // Write the HTML file
  fs.writeFileSync(path.join(postDir, 'index.html'), html);
  console.log(`Generated: /devpress/${post.slug}/index.html`);
});

console.log('Pre-rendering complete!');
