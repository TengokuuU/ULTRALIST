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
  selector: 'app-act-i',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './act-i.html',
  styleUrl: './act-i.css',
})
export class ActI {

  chapterTitle = 'INFINITE HYPERDEATH';
  chapterPRank = false;

  // ── LAYER 1: LIMBO ──────────────────────────────────────────
  limboLevels: Level[] = [
    {
      id: '1-1',
      code: '1-1',
      title: 'HEART OF THE SUNRISE',
      screenshot: 'images/act-i/1-1.png',
      pRank: true,
      completed: true,
      challenges: [
        { completed: true  },
        { completed: true  },
        { completed: false },
        { completed: false },
        { completed: false },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',    name: 'Tio',    difficulty: 'VIOLENT',  rank: 0, score: '72,341' },
        { avatar: 'images/avatars/kberg.png',  name: 'K_berg', difficulty: 'BRUTAL',   rank: 1, score: '61,209' },
        { avatar: 'images/avatars/kowaq.png',  name: 'Kowaq',  difficulty: 'STANDARD', rank: 1, score: '44,887' },
      ],
    },
    {
      id: '1-2',
      code: '1-2',
      title: 'THE BURNING WORLD',
      screenshot: 'images/act-i/1-2.png',
      pRank: false,
      completed: true,
      challenges: [
        { completed: true  },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',    name: 'Tio',     difficulty: 'VIOLENT',  rank: 0, score: '88,124' },
        { avatar: 'images/avatars/kowaq.png',  name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '55,302' },
        { avatar: 'images/avatars/tengoku.png',name: 'Tengoku', difficulty: 'STANDARD', rank: 1, score: '39,741' },
      ],
    },
    {
      id: '1-3',
      code: '1-3',
      title: 'HALLS OF SACRED REMAINS',
      screenshot: 'images/act-i/1-3.png',
      pRank: false,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',    name: 'Tio',    difficulty: 'BRUTAL',   rank: 0, score: '91,005' },
        { avatar: 'images/avatars/kberg.png',  name: 'K_berg', difficulty: 'VIOLENT',  rank: 1, score: '78,449' },
        { avatar: 'images/avatars/kowaq.png',  name: 'Kowaq',  difficulty: 'STANDARD', rank: 1, score: '61,118' },
      ],
    },
    {
      id: '1-4',
      code: '1-4',
      title: 'CLAIR DE LUNE',
      screenshot: 'images/act-i/1-4.png',
      pRank: false,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tengoku.png',name: 'Tengoku', difficulty: 'STANDARD', rank: 0, score: '44,230' },
        { avatar: 'images/avatars/tio.png',    name: 'Tio',     difficulty: 'VIOLENT',  rank: 1, score: '39,881' },
        { avatar: 'images/avatars/kberg.png',  name: 'K_berg',  difficulty: 'BRUTAL',   rank: 1, score: '27,654' },
      ],
    },
  ];

  // ── LAYER 2: LUST ────────────────────────────────────────────
  lustLevels: Level[] = [
    {
      id: '2-1',
      code: '2-1',
      title: 'BRIDGEBURNER',
      screenshot: 'images/act-i/2-1.png',
      pRank: false,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',    name: 'Tio',    difficulty: 'VIOLENT',  rank: 0, score: '64,882' },
        { avatar: 'images/avatars/kowaq.png',  name: 'Kowaq',  difficulty: 'STANDARD', rank: 1, score: '51,340' },
        { avatar: 'images/avatars/kberg.png',  name: 'K_berg', difficulty: 'BRUTAL',   rank: 1, score: '43,017' },
      ],
    },
    {
      id: '2-2',
      code: '2-2',
      title: 'DEATH AT 20,000 VOLTS',
      screenshot: 'images/act-i/2-2.png',
      pRank: false,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tengoku.png',name: 'Tengoku', difficulty: 'STANDARD', rank: 0, score: '77,503' },
        { avatar: 'images/avatars/tio.png',    name: 'Tio',     difficulty: 'VIOLENT',  rank: 1, score: '69,214' },
        { avatar: 'images/avatars/kowaq.png',  name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '48,891' },
      ],
    },
    {
      id: '2-3',
      code: '2-3',
      title: 'SHEER HEART ATTACK',
      screenshot: 'images/act-i/2-3.png',
      pRank: false,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/kberg.png',  name: 'K_berg', difficulty: 'VIOLENT',  rank: 0, score: '83,120' },
        { avatar: 'images/avatars/tio.png',    name: 'Tio',     difficulty: 'BRUTAL',   rank: 1, score: '74,655' },
        { avatar: 'images/avatars/tengoku.png',name: 'Tengoku', difficulty: 'STANDARD', rank: 1, score: '52,308' },
      ],
    },
    {
      id: '2-4',
      code: '2-4',
      title: 'COURT OF THE CORPSE KING',
      screenshot: 'images/act-i/2-4.png',
      pRank: false,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',    name: 'Tio',    difficulty: 'VIOLENT',  rank: 0, score: '95,441' },
        { avatar: 'images/avatars/kowaq.png',  name: 'Kowaq',  difficulty: 'STANDARD', rank: 1, score: '67,880' },
        { avatar: 'images/avatars/kberg.png',  name: 'K_berg', difficulty: 'BRUTAL',   rank: 1, score: '59,223' },
      ],
    },
  ];

  // ── LAYER 3: GLUTTONY ────────────────────────────────────────
  gluttonyLevels: Level[] = [
    {
      id: '3-1',
      code: '3-1',
      title: 'BELLY OF THE BEAST',
      screenshot: 'images/act-i/3-1.png',
      pRank: false,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tengoku.png',name: 'Tengoku', difficulty: 'STANDARD', rank: 0, score: '58,774' },
        { avatar: 'images/avatars/tio.png',    name: 'Tio',     difficulty: 'VIOLENT',  rank: 1, score: '49,332' },
        { avatar: 'images/avatars/kowaq.png',  name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '37,901' },
      ],
    },
    {
      id: '3-2',
      code: '3-2',
      title: 'IN THE FLESH',
      screenshot: 'images/act-i/3-2.png',
      pRank: false,
      completed: false,
      challenges: [
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
        { completed: false },
      ],
      activeTab: 'ANY',
      leaderboard: [
        { avatar: 'images/avatars/tio.png',    name: 'Tio',    difficulty: 'VIOLENT',  rank: 0, score: '102,887' },
        { avatar: 'images/avatars/kberg.png',  name: 'K_berg', difficulty: 'BRUTAL',   rank: 1, score: '88,541' },
        { avatar: 'images/avatars/tengoku.png',name: 'Tengoku',difficulty: 'STANDARD', rank: 1, score: '71,209' },
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
  goToInfo(id: string) {
  this.router.navigate(['/pinfo', id]);
}
}