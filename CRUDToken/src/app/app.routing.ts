import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES : Routes = [
    {path:'', component: LoginComponent},
    {path:'home', component: HomeComponent},
    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);