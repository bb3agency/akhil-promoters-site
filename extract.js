const fs = require('fs');
let html = fs.readFileSync('../rs-refer/abvtek.com/index.html', 'utf8');
let m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
let main = m ? m[1] : '';
main = main.replace(/class=/g, 'className=');
// Remove inline styles that hide elements
main = main.replace(/style="[^"]*opacity\s*:\s*0[^"]*"/g, '');
main = main.replace(/style="[^"]*"/g, ''); // just remove all inline styles for now, tailwind classes do the work mostly, or they were GSAP init states
main = main.replace(/_next\//g, 'ref-assets/');
main = main.replace(/\/_next\//g, '/ref-assets/');
main = main.replace(/<!--[\s\S]*?-->/g, '');

const voidTags = ['img', 'br', 'hr', 'input', 'meta', 'link', 'source'];
voidTags.forEach(tag => {
  let regex = new RegExp('<' + tag + '([^>]*?)(?<!/)>', 'gi');
  main = main.replace(regex, '<' + tag + '$1 />');
});

main = main.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, (match) => {
   return match.replace(/stroke-width/g, 'strokeWidth')
               .replace(/stroke-linecap/g, 'strokeLinecap')
               .replace(/stroke-linejoin/g, 'strokeLinejoin')
               .replace(/clip-path/g, 'clipPath')
               .replace(/viewbox/gi, 'viewBox')
               .replace(/fill-rule/g, 'fillRule')
               .replace(/clip-rule/g, 'clipRule');
});

// Fix unclosed path tags if any (Next.js sometimes minifies them)
main = main.replace(/<path([^>]*?)(?<!\/)>/gi, '<path$1 />');

// Branding
main = main.replace(/AbvTek/gi, 'Akhil Promoters');
main = main.replace(/Abvtek/g, 'Akhil Promoters');

const out = `
"use client";
import { useEffect } from "react";
import { ReactLenis, useLenis } from 'lenis/react'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="flex-1">
        ${main}
      </main>
    </ReactLenis>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', out);
console.log('done');
