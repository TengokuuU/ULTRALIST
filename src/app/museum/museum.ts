import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-museum',
  standalone: true,
  imports: [],
  templateUrl: './museum.html',
  styleUrl: './museum.css',
})
export class Museum {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}