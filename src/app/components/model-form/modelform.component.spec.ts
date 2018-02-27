import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModelFormComponent } from './modelform.component';

describe('Integration Testing : ', () => {
  let component: ModelFormComponent;
  let fixture: ComponentFixture<ModelFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ModelFormComponent]
    });

    fixture = TestBed.createComponent(ModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call save() method', () => {
    let submitEl = fixture.debugElement.query(By.css('.btn'));
    spyOn(component, 'save');
    submitEl.nativeElement.click();
    expect(component.save).toHaveBeenCalled();
  });

  it('should return form validity false when clicking submit button without passing values', () => {
    let submitEl = fixture.debugElement.query(By.css('.btn'));
    submitEl.nativeElement.click();
    expect(component.form.valid).toBe(false);
  });
});