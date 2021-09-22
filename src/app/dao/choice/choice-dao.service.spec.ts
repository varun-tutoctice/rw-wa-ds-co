import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { GenericServiceDAO } from '../generic/generic-dao.service';
import { ChoiceDaoService } from './choice-dao.service';

describe('ChoiceDaoService', () => {
  let service: ChoiceDaoService;
  let mockGenericServiceDAO = jasmine.createSpyObj('GenericServiceDAO', [
    'doGet',
  ]);
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChoiceDaoService,
        { provide: GenericServiceDAO, useValue: mockGenericServiceDAO },
        HttpClient,
        provideMockStore({}),
      ],
      imports: [HttpClientModule, StoreModule],
    });
    service = new ChoiceDaoService(mockGenericServiceDAO);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call doGet method in GenericServiceDAO ', () => {
    mockGenericServiceDAO.doGet.and.returnValue(of({}));
    service.getChoiceDao();
    expect(mockGenericServiceDAO.doGet).toHaveBeenCalled();
  });


});
