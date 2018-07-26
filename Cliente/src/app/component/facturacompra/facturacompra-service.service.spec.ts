import { TestBed, inject } from '@angular/core/testing';

import { FacturacompraServiceService } from './facturacompra-service.service';

describe('FacturacompraServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacturacompraServiceService]
    });
  });

  it('should be created', inject([FacturacompraServiceService], (service: FacturacompraServiceService) => {
    expect(service).toBeTruthy();
  }));
});
