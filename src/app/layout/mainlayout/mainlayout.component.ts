import { Component } from '@angular/core';
import { NavbarComponent } from '../../comps/navbar/navbar.component';
import { SidebarComponent } from '../../comps/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, CommonModule],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {
  isCollapsed: boolean = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
