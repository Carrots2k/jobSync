import { Component } from '@angular/core';
import { NavbarComponent } from '../../comps/navbar/navbar.component';
import { SidebarComponent } from '../../comps/sidebar/sidebar.component';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {

}
