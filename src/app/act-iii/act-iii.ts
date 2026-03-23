import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  selector: 'app-act-iii',
  imports: [],
  templateUrl: './act-iii.html',
  styleUrl: './act-iii.css',
})
export class ActIII {
   chapterPRank = false;

  // ── LAYER 4: VIOLENCE ──────────────────────────────────────────
  violenceLevels: Level[] = [
    {
      id: '7-1',
      code: '7-1',
      title: 'GARDEN OF FORKING PATHS',
      screenshot: 'images/act-iii/7-1.png',
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
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'VIOLENT',  rank: 0, score: '81,442' },
        { avatar: 'images/avatars/kberg.png',   name: 'K_berg',  difficulty: 'BRUTAL',   rank: 1, score: '67,003' },
        { avatar: 'images/avatars/kowaq.png',   name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '53,118' },
      ],
    },
    {
      id: '7-2',
      code: '7-2',
      title: 'LIGHT UP THE NIGHT',
      screenshot: 'images/act-iii/7-2.png',
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
        { avatar: 'images/avatars/tengoku.png', name: 'Tengoku', difficulty: 'STANDARD', rank: 0, score: '74,209' },
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'VIOLENT',  rank: 1, score: '68,774' },
        { avatar: 'images/avatars/kowaq.png',   name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '49,330' },
      ],
    },
    {
      id: '7-3',
      code: '7-3',
      title: 'NO SOUND, NO MEMORY',
      screenshot: 'images/act-iii/7-3.png',
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
        { avatar: 'images/avatars/kberg.png',   name: 'K_berg',  difficulty: 'VIOLENT',  rank: 0, score: '90,551' },
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'BRUTAL',   rank: 1, score: '82,007' },
        { avatar: 'images/avatars/tengoku.png', name: 'Tengoku', difficulty: 'STANDARD', rank: 1, score: '61,445' },
      ],
    },
    {
      id: '7-4',
      code: '7-4',
      title: '...LIKE ANTENNAS TO HEAVEN',
      screenshot: 'images/act-iii/7-4.png',
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
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'VIOLENT',  rank: 0, score: '55,880' },
        { avatar: 'images/avatars/kowaq.png',   name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '48,213' },
        { avatar: 'images/avatars/kberg.png',   name: 'K_berg',  difficulty: 'BRUTAL',   rank: 1, score: '39,991' },
      ],
    },
  ];

  // ── LAYER 8: FRAUD ──────────────────────────────────────────
  wrathLevels: Level[] = [
    {
      id: '8-1',
      code: '8-1',
      title: 'HURTBREAK WONDERLAND',
      screenshot: 'images/act-iii/8-1.png',
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
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'VIOLENT',  rank: 0, score: '93,771' },
        { avatar: 'images/avatars/kowaq.png',   name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '74,502' },
        { avatar: 'images/avatars/kberg.png',   name: 'K_berg',  difficulty: 'BRUTAL',   rank: 1, score: '60,119' },
      ],
    },
    {
      id: '8-2',
      code: '8-2',
      title: 'THROUGH THE MIRROR',
      screenshot: 'images/act-iii/8-2.png',
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
        { avatar: 'images/avatars/kberg.png',   name: 'K_berg',  difficulty: 'BRUTAL',   rank: 0, score: '87,334' },
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'VIOLENT',  rank: 1, score: '79,118' },
        { avatar: 'images/avatars/tengoku.png', name: 'Tengoku', difficulty: 'STANDARD', rank: 1, score: '55,660' },
      ],
    },
    {
      id: '8-3',
      code: '8-3',
      title: 'DISINTEGRATION LOOP',
      screenshot: 'images/act-iii/8-3.png',
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
        { avatar: 'images/avatars/tengoku.png', name: 'Tengoku', difficulty: 'STANDARD', rank: 0, score: '68,902' },
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'VIOLENT',  rank: 1, score: '61,447' },
        { avatar: 'images/avatars/kowaq.png',   name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '44,230' },
      ],
    },
    {
      id: '8-4',
      code: '8-4',
      title: 'FINAL FLIGHT',
      screenshot: 'images/act-iii/8-4.png',
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
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'VIOLENT',  rank: 0, score: '110,334' },
        { avatar: 'images/avatars/kberg.png',   name: 'K_berg',  difficulty: 'BRUTAL',   rank: 1, score: '95,882' },
        { avatar: 'images/avatars/kowaq.png',   name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '77,541' },
      ],
    },
  ];

  // ── LAYER 6: HERESY ─────────────────────────────────────────
  heresyLevels: Level[] = [
    {
      id: '9-1',
      code: '9-1',
      title: '???',
      screenshot: 'images/act-iii/9-1.png',
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
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'VIOLENT',  rank: 0, score: '98,227' },
        { avatar: 'images/avatars/tengoku.png', name: 'Tengoku', difficulty: 'STANDARD', rank: 1, score: '80,114' },
        { avatar: 'images/avatars/kberg.png',   name: 'K_berg',  difficulty: 'BRUTAL',   rank: 1, score: '71,883' },
      ],
    },
    {
      id: '9-2',
      code: '9-2',
      title: '???',
      screenshot: 'images/act-iii/9-2.png',
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
        { avatar: 'images/avatars/kberg.png',   name: 'K_berg',  difficulty: 'VIOLENT',  rank: 0, score: '115,009' },
        { avatar: 'images/avatars/tio.png',     name: 'Tio',     difficulty: 'BRUTAL',   rank: 1, score: '103,441' },
        { avatar: 'images/avatars/kowaq.png',   name: 'Kowaq',   difficulty: 'STANDARD', rank: 1, score: '88,762' },
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
