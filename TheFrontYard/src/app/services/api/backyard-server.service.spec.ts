import { TestBed } from '@angular/core/testing';

import { BackyardServerService } from './backyard-server.service';

describe('BackyardServerService', () => {
  let service: BackyardServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackyardServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
