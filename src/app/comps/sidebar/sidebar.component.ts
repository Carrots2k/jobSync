import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarService } from '../../services/sidebar.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, StyleClassModule, NavbarComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  sidebarVisible: boolean = true;
  
  constructor(private sidebarService: SidebarService, private router: Router) {
    this.sidebarService.sidebarToggle$.subscribe(() => {
      this.sidebarVisible = !this.sidebarVisible;
    });
  }
  
  goHome(){
    console.log('going to home')
    this.router.navigate(['/home'])
  }

  goJobs(){
    console.log('going to jobs')
    this.router.navigate(['/jobs'])
  }
}
