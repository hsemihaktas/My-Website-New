import { NextResponse } from 'next/server';

const BASE_URL = 'https://hsemihaktas.vercel.app'; // Kendi domainini buraya yaz

export async function GET() {
  // Statik ve dinamik sayfalar
  const staticPages = [
    '', // anasayfa
    'about',
    'projects',
  ];

  // Dinamik projeler için örnek
  // Gerçek projeleri data/projects.json'dan çekebilirsin
  const dynamicProjects = [
    'project1',
    'project2',
  ];

  const urls = [
    ...staticPages.map((page) => `${BASE_URL}/${page}`),
    ...dynamicProjects.map((slug) => `${BASE_URL}/project/${slug}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
