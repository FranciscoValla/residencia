import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReestablecerPage } from './reestablecer.page';

describe('ReestablecerPage', () => {
  let component: ReestablecerPage;
  let fixture: ComponentFixture<ReestablecerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReestablecerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReestablecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
