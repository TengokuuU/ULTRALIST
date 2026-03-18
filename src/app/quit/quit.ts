import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quit',
  standalone: true,
  imports: [],
  templateUrl: './quit.html',
  styleUrl: './quit.css',
})
export class Quit implements OnInit {

  private reloadListener = (e: KeyboardEvent) => {
    if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
      e.preventDefault();
      this.router.navigate(['/']);
    }
  };

  constructor(private router: Router) {}

  ngOnInit() {
    window.addEventListener('keydown', this.reloadListener);
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.reloadListener);
  }
}