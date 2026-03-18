import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css'
})
export class MainMenu {

  buttons = ['PLAY', 'OPTIONS', 'MUSEUM', 'QUIT'];
  activeButton = 'PLAY';

  constructor(private router: Router) { }

  setActive(btn: string) {
    this.activeButton = btn;
  }

  navigate(btn: string) {
    switch (btn) {
      case 'PLAY':
        this.router.navigate(['/selection']);
        break;
      case 'OPTIONS':
        break;
      case 'MUSEUM':
        this.router.navigate(['/museum']);
        break;
      case 'QUIT':
        window.close();
        this.router.navigate(['/quit']);
        break;
    }
  }
}