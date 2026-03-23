import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface EncoreLevel {
  id: string;
  code: string;
  title: string;
  screenshot: string;
  pRank: boolean;
  available: boolean;
}

@Component({
  selector: 'app-encores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encores.html',
  styleUrl: './encores.css',
})
export class Encores {

  levels: EncoreLevel[] = [
    {
      id: '0-E',
      code: '0-E',
      title: 'THIS HEAT, AN EVIL HEAT',
      screenshot: 'images/encores/0-E.png',
      pRank: false,
      available: true,
    },
    {
      id: '1-E',
      code: '1-E',
      title: '...THEN FELL THE ASHES',
      screenshot: 'images/encores/1-E.png',
      pRank: false,
      available: true,
    },
    {
      id: '2-E',
      code: '2-E',
      title: '???',
      screenshot: 'images/locked.png',
      pRank: false,
      available: false,
    },
    {
      id: '3-E',
      code: '3-E',
      title: '???',
      screenshot: 'images/locked.png',
      pRank: false,
      available: false,
    },
    {
      id: '4-E',
      code: '4-E',
      title: '???',
      screenshot: 'images/locked.png',
      pRank: false,
      available: false,
    },
    {
      id: '5-E',
      code: '5-E',
      title: '???',
      screenshot: 'images/locked.png',
      pRank: false,
      available: false,
    },
    {
      id: '6-E',
      code: '6-E',
      title: '???',
      screenshot: 'images/locked.png',
      pRank: false,
      available: false,
    },
    {
      id: '7-E',
      code: '7-E',
      title: '???',
      screenshot: 'images/locked.png',
      pRank: false,
      available: false,
    },
    {
      id: '8-E',
      code: '8-E',
      title: '???',
      screenshot: 'images/locked.png',
      pRank: false,
      available: false,
    },
    {
      id: '9-E',
      code: '9-E',
      title: '???',
      screenshot: 'images/locked.png',
      pRank: false,
      available: false,
    },
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/selection']);
  }
  goToInfo(id: string) {
  this.router.navigate(['/pinfo', id]);
}
}