import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CardModule } from 'primeng/card';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    HomeComponent,
    HeaderComponent,
    SalesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
