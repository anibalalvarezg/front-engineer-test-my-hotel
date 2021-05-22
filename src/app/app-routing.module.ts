import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelCreateComponent } from './components/hotel-create/hotel-create.component';
import { HotelEditComponent } from './components/hotel-edit/hotel-edit.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'add-hotel', component: HotelCreateComponent },
  { path:'edit/:id', component: HotelEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
