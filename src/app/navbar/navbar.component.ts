import { Component } from '@angular/core';
import { XmlGeneratorService } from '../services/xml-generator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private xmlGeneratorService: XmlGeneratorService) {}

  downloadXml(): void {
    const xmlContent = this.xmlGeneratorService.generateXml();
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    window.URL.revokeObjectURL(url);
  }

}
