import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface PrimeSanctum {
  id: string;
  code: string;
  title: string;
  screenshot: string;
  pRank: boolean;
  available: boolean;
  leaderboard: { avatar: string; name: string; difficulty: string; rank: number; score: string }[];
}

@Component({
  selector: 'app-prime-sanctums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prime-sanctums.html',
  styleUrl: './prime-sanctums.css',
})
export class PrimeSanctums {

  sanctums: PrimeSanctum[] = [
    {
      id: 'P-1',
      code: 'P-1',
      title: 'SOUL SURVIVOR',
      screenshot: 'images/prime-sanctums/P-1.png',
      pRank: false,
      available: true,
      leaderboard: [
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'VIOLENT',  rank: 0, score: '124,441' },
        { avatar: 'images/avatars/kberg.png',   name: 'K_berg',  difficulty: 'BRUTAL',   rank: 1, score: '108,003' },
        { avatar: 'images/avatars/kowaq.png',   name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '91,558'  },
      ],
    },
    {
      id: 'P-2',
      code: 'P-2',
      title: 'WAIT OF THE WORLD',
      screenshot: 'images/prime-sanctums/P-2.png',
      pRank: false,
      available: true,
      leaderboard: [
        { avatar: 'images/avatars/tengoku.png', name: 'Tengoku', difficulty: 'STANDARD', rank: 0, score: '138,774' },
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'VIOLENT',  rank: 1, score: '119,330' },
        { avatar: 'images/avatars/kberg.png',   name: 'K_berg',  difficulty: 'BRUTAL',   rank: 1, score: '97,112'  },
      ],
    },
    {
      id: 'P-3',
      code: 'P-3',
      title: '???',
      screenshot: 'images/locked.png',
      pRank: false,
      available: false,
      leaderboard: [],
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