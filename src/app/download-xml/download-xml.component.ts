import { Component } from '@angular/core';
import { XmlGeneratorService } from '../services/xml-generator.service';

@Component({
  selector: 'app-download-xml',
  standalone: true,
  imports: [],
  templateUrl: './download-xml.component.html',
  styleUrl: './download-xml.component.css'
})
export class DownloadXmlComponent {
  constructor(private xmlService: XmlGeneratorService) {}

  downloadXml(): void {
    const xmlContent = this.xmlService.generateXml();
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    window.URL.revokeObjectURL(url);
  }



}
