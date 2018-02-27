import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styles: []
})
export class ModelFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
    });
  }
  save() {
    if (this.form.valid) {
      
    }
  }
}