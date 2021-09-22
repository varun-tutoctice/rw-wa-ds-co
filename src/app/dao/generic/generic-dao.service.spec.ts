import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';

import { GenericServiceDAO } from './generic-dao.service';

describe('GenericDaoService', () => {
  let service: GenericServiceDAO;
  let cookieService: CookieService;
  let httpService: HttpClient;
  let mockCookieServiceSpy = jasmine.createSpyObj('CookieService', ['get']);
  let mockHttpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({}),
        { provide: CookieService, useValue: mockCookieServiceSpy },
        { provide: HttpClient, useValue: mockHttpClientSpy },
      ],
      imports: [HttpClientModule, StoreModule],
    });
    service = TestBed.inject(GenericServiceDAO);
    cookieService = TestBed.inject(CookieService);
    httpService = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('doGet method should return service api data', (done) => {
    mockHttpClientSpy.get.and.returnValue(of({}));
    service.doGet('','','en-g','').subscribe(res=>{
      console.log(res)
      expect(res).toEqual({});
      done();
    })

  });
  it('getCookie method should get requested cookie data', () => {
    mockCookieServiceSpy.get.and.returnValue('Cookie Test');
    service.getCookie('X-IHG-SSO-TOKEN');
    expect(service.cookies['X-IHG-SSO-TOKEN']).toBe('Cookie Test');
  });

  
});
