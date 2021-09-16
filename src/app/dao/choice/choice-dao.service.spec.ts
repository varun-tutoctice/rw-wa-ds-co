import { TestBed } from '@angular/core/testing';

import { ChoiceDaoService } from './choice-dao.service';

describe('ChoiceDaoService', () => {
  let service: ChoiceDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoiceDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
