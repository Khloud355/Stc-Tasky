import { TestBed } from '@angular/core/testing';

import { TransalteConfigService } from './transalte-config.service';

describe('TransalteConfigService', () => {
  let service: TransalteConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransalteConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
