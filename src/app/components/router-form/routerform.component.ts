import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routerform',
  templateUrl: './routerform.component.html',
  styles: []
})
export class RouterFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
    });
  }
  save() {
    //TO DO : save data
    this.router.navigate(['listing']);
  }
}