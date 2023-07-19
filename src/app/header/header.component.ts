import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../side-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;

  constructor(private sideMenuService: SideMenuService) {}

  ngOnInit(): void {
    this.sideMenuService.isOpen.subscribe((isOpen) => (this.isOpen = isOpen));
  }

  close() {
    this.sideMenuService.close();
  }

  toggle() {
    if(this.isOpen) {
      this.sideMenuService.close();
    } else {
      this.sideMenuService.open();
    }
  }
}
