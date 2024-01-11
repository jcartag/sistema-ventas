import { Component } from '@angular/core';
import { navbarData } from '../helpers/constantes';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  collapsed = false;
  navData = navbarData;

  toggleCollapse(){
    this.collapsed = !this.collapsed;
  }

  closeSidenav(){
    this.collapsed = false;
  }

}

