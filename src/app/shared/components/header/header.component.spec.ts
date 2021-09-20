import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SubjectServiceService } from '@app/shared/services/subject-service.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: SubjectServiceService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ SubjectServiceService ]
    })
    .compileComponents();
    service = TestBed.inject(SubjectServiceService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  function setup() {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    const subjectService = fixture.debugElement.injector.get(
      SubjectServiceService
    );
    return { fixture, app, subjectService}
  }

  it('should create', () => {
    const { app } = setup();
    expect(component).toBeTruthy();
  });
  
  it('Should pass accountInformation when clicked on it', () => {
    const { app, fixture, subjectService } = setup();
    fixture.detectChanges();
    component.clickAccount();
    expect(subjectService.viewInfo.next("accountInformation")).toBeUndefined();
  });


  it('Should pass walletInformation when clicked on it', () => {
    const { app, fixture, subjectService } = setup();
    fixture.detectChanges();
    component.clickWallet();
    expect(subjectService.viewInfo.next("walletInformation")).toBeUndefined();
  });

});
