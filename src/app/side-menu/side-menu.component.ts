import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../side-menu.service';
import { MenuItem, MenuItems } from '../menu-item.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isOpen: boolean = false;
  menuItems: MenuItem[] = MenuItems;
  constructor(private sideMenuService: SideMenuService) {}

  ngOnInit(): void {
    this.sideMenuService.isOpen.subscribe((isOpen) => (this.isOpen = isOpen));
  }

  close() {
    this.sideMenuService.close();
  }
}
