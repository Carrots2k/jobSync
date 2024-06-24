import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarService } from '../../services/sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, NavbarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  sidebarVisible: boolean = true;
  routerLink : string  = '/home'
  
  constructor(private sidebarService: SidebarService,private router: Router) {
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
