import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'homepage', component: HomeComponent },
    { path: '', pathMatch:'full', component:HomeComponent}
];
