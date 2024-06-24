import { Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';

export const routes: Routes = [
    {path: '', component: MainlayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {path: 'home', component: DashboardComponent},
            {path: 'jobs', component: JobsComponent}
        ]
    }
];
