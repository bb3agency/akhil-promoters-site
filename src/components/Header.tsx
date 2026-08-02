import fs from 'fs';
import path from 'path';

export default function Header() {
  const htmlPath = path.join(process.cwd(), '../rs-refer/abvtek.com/index.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    return null;
  }
  
  const headerMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/i);
  let headerContent = headerMatch ? headerMatch[0] : '';
  headerContent = headerContent.replace(/<svg[^>]*>[\s\S]*?<\/svg>/, '<img src="/akhil-promoters-logo.png" alt="Akhil Promoters Logo" class="h-20 md:h-28 w-auto" />');
  
  // Remove the invert and mix-blend classes that mess up the logo colors
  headerContent = headerContent.replace(/invert-100 mix-blend-difference/g, '');
  
  headerContent = headerContent.replace(/_next\//g, 'ref-assets/');
  headerContent = headerContent.replace(/\/_next\//g, '/ref-assets/');
  
  // Fix .html links to be Next.js friendly
  headerContent = headerContent.replace(/href="index\.html"/g, 'href="/"');
  headerContent = headerContent.replace(/href="contact-us\.html"/g, 'href="/contact"');
  headerContent = headerContent.replace(/href="our-projects\.html"/g, 'href="/projects"');
  headerContent = headerContent.replace(/href="about-us\.html"/g, 'href="/#about"');
  // Catch-all: any remaining .html links
  headerContent = headerContent.replace(/href="([^"]*?)\/index\.html"/g, 'href="/$1"');
  headerContent = headerContent.replace(/href="([^"]*?)\.html"/g, 'href="/$1"');

  return (
    <div dangerouslySetInnerHTML={{ __html: headerContent }} />
  );
}
