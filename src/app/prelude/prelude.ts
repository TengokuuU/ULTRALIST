import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface LeaderboardEntry {
  avatar: string;
  name: string;
  difficulty: string;
  rank: number;
  score: string;
}

interface ChallengeSlot {
  completed: boolean;
}

interface Level {
  id: string;
  code: string;
  title: string;
  screenshot: string;
  pRank: boolean;
  completed: boolean;
  challenges: ChallengeSlot[];
  activeTab: 'ANY' | 'P-RANK';
  leaderboard: LeaderboardEntry[];
}

@Component({
  selector: 'app-prelude',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prelude.html',
  styleUrl: './prelude.css',
})
export class Prelude {

  chapterTitle = 'OVERTURE: THE MOUTH OF HELL';
  chapterPRank = true;

  levels: Level[] = [
    {
      id: '0-1',
      code: '0-1',
      title: 'INTO THE FIRE',
      screenshot: 'images/prelude/0-1.png',
      pRank: true,
      completed: true,
      challenges: [
        { completed: true },
        { completed: true },
        { completed: true },
        { completed: true },
        { completed: true },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',   name: 'Tio',   difficulty: 'VIOLENT', rank: 0, score: '56,465' },
        { avatar: 'images/avatars/kberg.png',  name: 'K_berg', difficulty: 'BRUTAL', rank: 1, score: '05,421' },
        { avatar: 'images/avatars/kowaq.png',  name: 'Kowaq',  difficulty: 'STANDARD', rank: 1, score: '20,143' },
      ],
    },
    {
      id: '0-2',
      code: '0-2',
      title: 'THE MEATGRINDER',
      screenshot: 'images/prelude/0-2.png',
      pRank: true,
      completed: false,
      challenges: [
        { completed: true },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: true },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',   name: 'Tio',   difficulty: 'VIOLENT',  rank: 0, score: '58,485' },
        { avatar: 'images/avatars/kowaq.png',  name: 'Kowaq',  difficulty: 'STANDARD', rank: 1, score: '12,579' },
        { avatar: 'images/avatars/kberg.png',  name: 'K_berg', difficulty: 'BRUTAL',   rank: 1, score: '16,883' },
      ],
    },
    {
      id: '0-3',
      code: '0-3',
      title: 'DOUBLE DOWN',
      screenshot: 'images/prelude/0-3.png',
      pRank: true,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: true },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',    name: 'Tio',     difficulty: 'STANDARD', rank: 1, score: '03,158' },
        { avatar: 'images/avatars/kowaq.png',   name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '22,119' },
        { avatar: 'images/avatars/tengoku.png', name: 'Tengoku', difficulty: 'STANDARD', rank: 3, score: '17,871' },
      ],
    },
    {
      id: '0-4',
      code: '0-4',
      title: 'A ONE-MACHINE ARMY',
      screenshot: 'images/prelude/0-4.png',
      pRank: true,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: true },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',    name: 'Tio',     difficulty: 'VIOLENT',  rank: 0, score: '50,351' },
        { avatar: 'images/avatars/kowaq.png',   name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '13,057' },
        { avatar: 'images/avatars/tengoku.png', name: 'Tengoku', difficulty: 'STANDARD', rank: 1, score: '48,354' },
      ],
    },
    {
      id: '0-5',
      code: '0-5',
      title: 'CERBERUS',
      screenshot: 'images/prelude/0-5.png',
      pRank: true,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: true },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',   name: 'Tio',   difficulty: 'VIOLENT',  rank: 0, score: '53,069' },
        { avatar: 'images/avatars/kowaq.png',  name: 'Kowaq',  difficulty: 'STANDARD', rank: 1, score: '09,554' },
        { avatar: 'images/avatars/kberg.png',  name: 'K_berg', difficulty: 'VIOLENT',  rank: 1, score: '40,017' },
      ],
    },
  ];

  constructor(private router: Router) {}

  setTab(level: Level, tab: 'ANY' | 'P-RANK') {
    level.activeTab = tab;
  }

  goBack() {
    this.router.navigate(['/selection']);
  }
}