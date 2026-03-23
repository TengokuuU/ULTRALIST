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
  selector: 'app-act-ii',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './act-ii.html',
  styleUrl: './act-ii.css',
})
export class ActII {

  chapterPRank = false;

  // ── LAYER 4: GREED ──────────────────────────────────────────
  greedLevels: Level[] = [
    {
      id: '4-1',
      code: '4-1',
      title: 'SLAVES TO POWER',
      screenshot: 'images/act-ii/4-1.png',
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
      id: '4-2',
      code: '4-2',
      title: 'GOD DAMN THE SUN',
      screenshot: 'images/act-ii/4-2.png',
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
      id: '4-3',
      code: '4-3',
      title: 'A SHOT IN THE DARK',
      screenshot: 'images/act-ii/4-3.png',
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
      id: '4-4',
      code: '4-4',
      title: 'CLAIR DE SOLEIL',
      screenshot: 'images/act-ii/4-4.png',
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

  // ── LAYER 5: WRATH ──────────────────────────────────────────
  wrathLevels: Level[] = [
    {
      id: '5-1',
      code: '5-1',
      title: 'IN THE WAKE OF POSEIDON',
      screenshot: 'images/act-ii/5-1.png',
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
      id: '5-2',
      code: '5-2',
      title: 'WAVE OF THE SEA',
      screenshot: 'images/act-ii/5-2.png',
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
      id: '5-3',
      code: '5-3',
      title: 'SHIP OF FOOLS',
      screenshot: 'images/act-ii/5-3.png',
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
      id: '5-4',
      code: '5-4',
      title: 'LEVIATHAN',
      screenshot: 'images/act-ii/5-4.png',
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
      id: '6-1',
      code: '6-1',
      title: 'CRY FOR THE WEEPER',
      screenshot: 'images/act-ii/6-1.png',
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
      id: '6-2',
      code: '6-2',
      title: 'AESTHETICS OF HATE',
      screenshot: 'images/act-ii/6-2.png',
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