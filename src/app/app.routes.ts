import { Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: MainlayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {path: 'home', component: DashboardComponent}
        ]
    }
];
