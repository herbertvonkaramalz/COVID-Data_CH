import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwitzerlandPage } from './switzerland.page';

describe('SwitzerlandPage', () => {
  let component: SwitzerlandPage;
  let fixture: ComponentFixture<SwitzerlandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitzerlandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwitzerlandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
