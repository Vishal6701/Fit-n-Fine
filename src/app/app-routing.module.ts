import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

import { EmployeeComponent } from './employee/employee.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {path:'' ,component:EmployeeComponent },
  {path:'employees' ,component:EmployeeComponent },
  {path:'employees/:id' ,component:EmployeeComponent },
  {path:'price',component:PriceComponent},
  {path:'exercise',component:ExercisesComponent},
  {path:'demo',component:DemoComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const  routesComponent=[EmployeeComponent, PriceComponent,PageNotFoundComponent]
