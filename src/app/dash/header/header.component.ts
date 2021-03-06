import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBar = new EventEmitter();
  constructor() {}
  showMapModal: boolean = false;
  ngOnInit(): void {}
  openMapModal() {
    this.showMapModal = true;
  }
}
