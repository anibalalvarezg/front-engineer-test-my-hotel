import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './components/rating/rating.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { HotelEditComponent } from './components/hotel-edit/hotel-edit.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { HotelCreateComponent } from './components/hotel-create/hotel-create.component';
import { CustomCurrencyCLPPipe } from './pipes/custom-currency-clp.pipe';
import { CurrencyDirective } from './directives/currency.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RatingComponent,
    EditButtonComponent,
    HotelEditComponent,
    DeleteButtonComponent,
    HotelFormComponent,
    HotelCreateComponent,
    CustomCurrencyCLPPipe,
    CurrencyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    // For mocking server
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
