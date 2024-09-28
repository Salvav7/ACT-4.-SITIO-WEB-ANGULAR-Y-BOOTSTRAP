import { TestBed } from '@angular/core/testing';

import { XmlGeneratorService } from './xml-generator.service';

describe('XmlGeneratorService', () => {
  let service: XmlGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
