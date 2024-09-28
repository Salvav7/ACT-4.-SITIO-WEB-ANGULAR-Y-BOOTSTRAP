import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class XmlGeneratorService {
  constructor(private sanitizer: DomSanitizer) { }

  // Método para generar el XML
  generateXml(): string {
    const xmlContent = `
     <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  
  <!-- Páginas Web -->
  <url>
    <loc>https://localhost:4200/home/</loc>
    <lastmod>2024-09-12</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://localhost:4200/series</loc>
    <lastmod>2024-09-12</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://localhost:4200/privacidad</loc>
    <lastmod>2024-09-12</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://localhost:4200/terminos</loc>
    <lastmod>2024-09-12</lastmod>
    <priority>0.80</priority>
  <url>
    <loc>https://localhost:4200/</loc>
    <image:image>
      <image:loc>/src/assets/berlin.jpg</image:loc>
      <image:caption>Descripción de la imagen 1</image:caption>
    </image:image>
    <image:image>
      <image:loc>/src/assets/100png.jpg</image:loc>
      <image:caption>Descripción de la imagen 2</image:caption>
    </image:image>
  </url>

  <!-- Videos -->
  <url>
    <loc>/src/assets/You_ T.mp4</loc>
    <video:video>
      <video:thumbnail_loc>https://www.tusitio.com/assets/thumbnail1.jpg</video:thumbnail_loc>
      <video:title>You</video:title>
      <video:description>Trailer</video:description>
      <video:duration>600</video:duration>
      <video:publication_date>2024-09-12</video:publication_date>
    </video:video>
  </url>

</urlset>
    `;
    return xmlContent;
  }

  // Método para descargar el XML
  downloadXml(xmlContent: string): any {
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
