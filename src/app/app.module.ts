import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AddUserModalComponent } from './components/modals/add-user-modal/add-user-modal.component';
import { UpdateUserModalComponent } from './components/modals/update-user-modal/update-user-modal.component';
import { FullNamePipe } from './pipes/full-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddUserModalComponent,
    UpdateUserModalComponent,
    FullNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
