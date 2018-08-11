import { PortadaModule } from './portada.module';

describe('PortadaModule', () => {
  let portadaModule: PortadaModule;

  beforeEach(() => {
    portadaModule = new PortadaModule();
  });

  it('should create an instance', () => {
    expect(portadaModule).toBeTruthy();
  });
});
