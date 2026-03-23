import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

interface PInfoData {
  levelId: string;
  title: string;
  timeRequirement: string;
  killCount: number;
  styleScore: number;
  notes?: string;
}

@Component({
  selector: 'app-pinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pinfo.html',
  styleUrl: './pinfo.css',
})
export class PInfo implements OnInit {

  level: PInfoData | null = null;
  notFound = false;

  // ── P-RANK REQUIREMENTS DATABASE ─────────────────────────────
  // All values are S-rank thresholds sourced from the ULTRAKILL
  // Steam guide and wiki. Layer 9 is unreleased — marked accordingly.
  private levels: PInfoData[] = [

    // ── PRELUDE: THE MOUTH OF HELL ───────────────────────────
    { levelId: '0-1', title: 'INTO THE FIRE',           timeRequirement: '2:30',  killCount: 71,  styleScore: 7000  },
    { levelId: '0-2', title: 'THE MEATGRINDER',         timeRequirement: '2:00',  killCount: 53,  styleScore: 6000  },
    { levelId: '0-3', title: 'DOUBLE DOWN',             timeRequirement: '3:30',  killCount: 49,  styleScore: 7000  },
    { levelId: '0-4', title: 'A ONE-MACHINE ARMY',      timeRequirement: '2:20',  killCount: 53,  styleScore: 8500  },
    { levelId: '0-5', title: 'CERBERUS',                timeRequirement: '2:00',  killCount: 2,   styleScore: 3200,
      notes: 'Timer ends when the boss health reaches zero.' },

    // ── LAYER 1: LIMBO ────────────────────────────────────────
    { levelId: '1-1', title: 'HEART OF THE SUNRISE',    timeRequirement: '4:30',  killCount: 76,  styleScore: 8000  },
    { levelId: '1-2', title: 'THE BURNING WORLD',       timeRequirement: '4:40',  killCount: 72,  styleScore: 7000  },
    { levelId: '1-3', title: 'HALLS OF SACRED REMAINS', timeRequirement: '8:00',  killCount: 126, styleScore: 14000 },
    { levelId: '1-4', title: 'CLAIR DE LUNE',           timeRequirement: '2:15',  killCount: 0,   styleScore: 600   },

    // ── LAYER 2: LUST ─────────────────────────────────────────
    { levelId: '2-1', title: 'BRIDGEBURNER',            timeRequirement: '3:30',  killCount: 69,  styleScore: 11000 },
    { levelId: '2-2', title: 'DEATH AT 20,000 VOLTS',   timeRequirement: '5:00',  killCount: 62,  styleScore: 12000 },
    { levelId: '2-3', title: 'SHEER HEART ATTACK',      timeRequirement: '4:20',  killCount: 66,  styleScore: 9000  },
    { levelId: '2-4', title: 'COURT OF THE CORPSE KING',timeRequirement: '4:00',  killCount: 1,   styleScore: 3500  },

    // ── LAYER 3: GLUTTONY ─────────────────────────────────────
    { levelId: '3-1', title: 'BELLY OF THE BEAST',      timeRequirement: '5:30',  killCount: 90,  styleScore: 18000 },
    { levelId: '3-2', title: 'IN THE FLESH',            timeRequirement: '4:30',  killCount: 0,   styleScore: 2000  },

    // ── LAYER 4: GREED ────────────────────────────────────────
    { levelId: '4-1', title: 'SLAVES TO POWER',         timeRequirement: '7:30',  killCount: 102, styleScore: 20000 },
    { levelId: '4-2', title: 'GOD DAMN THE SUN',        timeRequirement: '4:40',  killCount: 69,  styleScore: 18000 },
    { levelId: '4-3', title: 'A SHOT IN THE DARK',      timeRequirement: '5:30',  killCount: 75,  styleScore: 17000 },
    { levelId: '4-4', title: 'CLAIR DE SOLEIL',         timeRequirement: '2:40',  killCount: 4,   styleScore: 2500  },

    // ── LAYER 5: WRATH ────────────────────────────────────────
    { levelId: '5-1', title: 'IN THE WAKE OF POSEIDON', timeRequirement: '8:30',  killCount: 80,  styleScore: 18000 },
    { levelId: '5-2', title: 'WAVES OF THE STARLESS SEA',timeRequirement: '4:30', killCount: 37,  styleScore: 10000 },
    { levelId: '5-3', title: 'SHIP OF FOOLS',           timeRequirement: '8:00',  killCount: 120, styleScore: 30000 },
    { levelId: '5-4', title: 'LEVIATHAN',               timeRequirement: '2:10',  killCount: 1,   styleScore: 5000  },

    // ── LAYER 6: HERESY ───────────────────────────────────────
    { levelId: '6-1', title: 'CRY FOR THE WEEPER',      timeRequirement: '9:00',  killCount: 90,  styleScore: 22000 },
    { levelId: '6-2', title: 'AESTHETICS OF HATE',      timeRequirement: '4:30',  killCount: 2,   styleScore: 8000,
      notes: 'Timer ends when the boss health reaches zero.' },

    // ── LAYER 7: VIOLENCE ─────────────────────────────────────
    { levelId: '7-1', title: 'GARDEN OF FORKING PATHS', timeRequirement: '9:10',  killCount: 150, styleScore: 35000,
      notes: 'Timer ends when the boss health reaches zero.' },
    { levelId: '7-2', title: 'LIGHT UP THE NIGHT',      timeRequirement: '9:10',  killCount: 91,  styleScore: 18000 },
    { levelId: '7-3', title: 'NO SOUND, NO MEMORY',     timeRequirement: '9:00',  killCount: 55,  styleScore: 18000 },
    { levelId: '7-4', title: '...LIKE ANTENNAS TO HEAVEN', timeRequirement: '5:30', killCount: 32, styleScore: 20000,
      notes: 'Timer ends when the Earthmover triggers its death explosion.' },

    // ── LAYER 8: FRAUD ────────────────────────────────────────
    { levelId: '8-1', title: 'HURTBREAK WONDERLAND',    timeRequirement: '8:00',  killCount: 80,  styleScore: 27500 },
    { levelId: '8-2', title: 'THROUGH THE MIRROR',      timeRequirement: '9:10',  killCount: 91,  styleScore: 30000 },
    { levelId: '8-3', title: 'DISINTEGRATION LOOP',     timeRequirement: '17:30', killCount: 197, styleScore: 74000 },
    { levelId: '8-4', title: 'FINAL FLIGHT',            timeRequirement: '2:40',  killCount: 7,   styleScore: 12000,
      notes: 'Timer ends when the boss health reaches zero.' },

    // ── LAYER 9: TREACHERY (UNRELEASED) ───────────────────────
    { levelId: '9-1', title: 'APOCATTACK',              timeRequirement: '???',   killCount: 0,   styleScore: 0,
      notes: 'Layer 9 is not yet released. Requirements unknown.' },
    { levelId: '9-2', title: 'THE SILENCE',             timeRequirement: '???',   killCount: 0,   styleScore: 0,
      notes: 'Layer 9 is not yet released. Requirements unknown.' },

    // ── PRIME SANCTUMS ────────────────────────────────────────
    { levelId: 'P-1', title: 'SOUL SURVIVOR',           timeRequirement: '3:33',  killCount: 2,   styleScore: 7500,
      notes: 'Timer ends when the boss health reaches zero.' },
    { levelId: 'P-2', title: 'WAIT OF THE WORLD',       timeRequirement: '8:00',  killCount: 2,   styleScore: 14000,
      notes: 'Timer ends when the boss health reaches zero.' },

    // ── ENCORES ───────────────────────────────────────────────
    { levelId: '0-E', title: 'PLACEHOLDER TITLE',       timeRequirement: '???',   killCount: 0,   styleScore: 0 },
    { levelId: '1-E', title: 'PLACEHOLDER TITLE',       timeRequirement: '???',   killCount: 0,   styleScore: 0 },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('levelId');
    const found = this.levels.find(l => l.levelId === id);
    if (found) {
      this.level = found;
    } else {
      this.notFound = true;
    }
  }

  goBack() {
    this.router.navigate(['/selection']);
  }
}