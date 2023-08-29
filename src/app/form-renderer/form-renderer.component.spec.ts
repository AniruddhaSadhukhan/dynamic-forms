import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRendererComponent } from './form-renderer.component';

describe('FormRendererComponent', () => {
  let component: FormRendererComponent;
  let fixture: ComponentFixture<FormRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRendererComponent]
    });
    fixture = TestBed.createComponent(FormRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
