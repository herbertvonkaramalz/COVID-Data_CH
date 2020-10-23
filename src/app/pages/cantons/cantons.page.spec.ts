import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CantonsPage } from './cantons.page';

describe('CantonsPage', () => {
  let component: CantonsPage;
  let fixture: ComponentFixture<CantonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CantonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
