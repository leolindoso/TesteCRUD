import { NormalUserComponent } from './normal-user/normal-user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

const HOME_ROUTES : Routes = [
    {path:'home', component: HomeComponent,children: [
        {path:'admin', component: AdminComponent},
        {path: 'normaluser', component: NormalUserComponent}
    ]},
    
    
]

@NgModule({
    imports: [RouterModule.forChild(HOME_ROUTES)],
    exports: [RouterModule]

})

export class HomeRouting{}