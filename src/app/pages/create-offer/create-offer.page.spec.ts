import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateOfferPage } from './create-offer.page';

describe('CreateOfferPage', () => {
  let component: CreateOfferPage;
  let fixture: ComponentFixture<CreateOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOfferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
