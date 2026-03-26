import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sandbox',
  imports: [],
  templateUrl: './sandbox.html',
  styleUrl: './sandbox.css',
})
export class Sandbox {
    constructor(private router: Router) {}

    goBack() {
    this.router.navigate(['/selection']);
  }
}
