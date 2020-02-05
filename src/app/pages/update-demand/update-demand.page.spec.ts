import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateDemandPage } from './update-demand.page';

describe('UpdateDemandPage', () => {
  let component: UpdateDemandPage;
  let fixture: ComponentFixture<UpdateDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
