import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoComponent } from './acao.component';

describe('AcaoComponent', () => {
  let component: AcaoComponent;
  let fixture: ComponentFixture<AcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
