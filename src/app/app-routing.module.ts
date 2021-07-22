import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { InputsComponent } from "./views/inputs/inputs.component";
import { OutsComponent } from "./views/outs/outs.component"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent

},
{
  path: "inputs",
  component: InputsComponent
},
{
  path: "outs",
  component: OutsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
