import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterFormComponent } from './routerform.component';
import { Router } from '@angular/router';

class RouterStub {
  navigate(params) {  }
}

describe('Form with Router : ', () => {
  let component: RouterFormComponent;
  let fixture: ComponentFixture<RouterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RouterFormComponent],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    });

    fixture = TestBed.createComponent(RouterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect the user to listing page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();
    expect(spy).toHaveBeenCalledWith(['listing']);
  });
});   