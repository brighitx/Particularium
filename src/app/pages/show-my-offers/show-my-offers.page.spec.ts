import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowMyOffersPage } from './show-my-offers.page';

describe('ShowMyOffersPage', () => {
  let component: ShowMyOffersPage;
  let fixture: ComponentFixture<ShowMyOffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMyOffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowMyOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
