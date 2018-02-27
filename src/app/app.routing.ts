import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ModelFormComponent } from './components/model-form/modelform.component';
import { ServiceComponent } from './components/service-listing/service.component';
import { RouterFormComponent } from './components/router-form/routerform.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'modelform', component: ModelFormComponent },
  { path: 'listing', component: ServiceComponent },
  { path: 'routerform', component: RouterFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [FormComponent, ModelFormComponent, ServiceComponent,RouterFormComponent];