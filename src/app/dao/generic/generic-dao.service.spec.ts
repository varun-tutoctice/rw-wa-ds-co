import { TestBed } from '@angular/core/testing';

import { GenericDaoService } from './generic-dao.service';

describe('GenericDaoService', () => {
  let service: GenericDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
