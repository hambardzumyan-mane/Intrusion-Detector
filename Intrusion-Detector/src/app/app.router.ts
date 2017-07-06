import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ObjectComponent } from './object/object.component';
import { CamerasComponent } from './cameras/cameras.component';
import { LoginComponent } from './login/login.component';

export const router:Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'}, //for empty path
    {path: '**', redirectTo: '/home', pathMatch: 'full'},//for fallback
    {path:'home', component:HomeComponent},
    {path:'object', component:ObjectComponent},
    {path:'cameras', component:CamerasComponent},
    {path:'login', component:LoginComponent}
];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);