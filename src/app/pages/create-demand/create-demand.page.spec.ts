import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateDemandPage } from './create-demand.page';

describe('CreateDemandPage', () => {
  let component: CreateDemandPage;
  let fixture: ComponentFixture<CreateDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
