import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { HexagramComponent } from '../hexagram/hexagram.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('../hexagram/hexagram.component').then(m => m.HexagramComponent)
    }
];

@NgModule({
    declarations: [],
    imports: [
      AppComponent,
      HexagramComponent,
      BrowserModule,
      FormsModule,
      HttpClientModule
    ],
    providers: []
  })
  export class AppModule { }
