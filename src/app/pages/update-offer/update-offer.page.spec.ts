import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateOfferPage } from './update-offer.page';

describe('UpdateOfferPage', () => {
  let component: UpdateOfferPage;
  let fixture: ComponentFixture<UpdateOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOfferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
