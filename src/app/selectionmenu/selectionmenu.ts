import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: string;
  label: string;
  rank: boolean; // true = gold P badge, false = empty box
}

@Component({
  selector: 'app-selectionmenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selectionmenu.html',
  styleUrl: './selectionmenu.css'
})
export class Selectionmenu {

  primaryItems: MenuItem[] = [
    { id: 'prelude',       label: 'PRELUDE',                    rank: true  },
    { id: 'act-i',         label: 'ACT I: INFINITE HYPERDEATH', rank: true  },
    { id: 'act-ii',        label: 'ACT II: IMPERFECT HATRED',   rank: true  },
    { id: 'act-iii',       label: 'ACT III: GODFIST SUICIDE',   rank: false },
  ];

  secondaryItems: MenuItem[] = [
    { id: 'encores',       label: 'ENCORES',                    rank: false },
    { id: 'prime-sanctums',label: 'PRIME SANCTUMS',             rank: false },
    { id: 'cyber-grind',   label: 'THE CYBER GRIND',            rank: false },
    { id: 'sandbox',       label: 'SANDBOX',                    rank: false },
  ];

  constructor(private router: Router) {}

  navigate(id: string) {
    this.router.navigate(['/' + id]);
  }
}