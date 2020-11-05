import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import {AddFormComponent} from './events/add-form/add-form.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AddFormComponent,
    EventListComponent,
    EventItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
