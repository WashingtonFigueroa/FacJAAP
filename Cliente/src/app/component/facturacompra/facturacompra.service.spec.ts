import { TestBed, inject } from '@angular/core/testing';

import { FacturacompraService } from './facturacompra.service';

describe('FacturacompraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacturacompraService]
    });
  });

  it('should be created', inject([FacturacompraService], (service: FacturacompraService) => {
    expect(service).toBeTruthy();
  }));
});
