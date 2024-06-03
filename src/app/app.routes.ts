import { Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent}
];
