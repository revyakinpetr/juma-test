import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FieldsComponent} from './components/fields/fields.component';
import {LoaderComponent} from './components/loader/loader.component';
import {PopupComponent} from './components/popup/popup.component';



@NgModule({
  declarations: [
    AppComponent,
    FieldsComponent,
    LoaderComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
