import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './options.html',
  styleUrl: './options.css',
})
export class Options implements OnInit {

  activeTab: 'AUDIO' | 'VIDEO' = 'AUDIO';

  // ── AUDIO ────────────────────────────────────────────────────
  masterVolume = 100;
  musicVolume  = 80;

  // ── VIDEO ────────────────────────────────────────────────────
  isFullscreen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const saved = localStorage.getItem('uk-options');
    if (saved) {
      const data = JSON.parse(saved);
      this.masterVolume = data.masterVolume ?? 100;
      this.musicVolume  = data.musicVolume  ?? 80;
      this.isFullscreen = data.isFullscreen ?? false;
    }
  }

  setTab(tab: 'AUDIO' | 'VIDEO') {
    this.activeTab = tab;
  }

  onMasterChange() { this.save(); }
  onMusicChange()  { this.save(); }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      this.isFullscreen = true;
    } else {
      document.exitFullscreen();
      this.isFullscreen = false;
    }
    this.save();
  }

  resetDefaults() {
    this.masterVolume = 100;
    this.musicVolume  = 80;
    this.isFullscreen = false;
    if (document.fullscreenElement) document.exitFullscreen();
    this.save();
  }

  private save() {
    localStorage.setItem('uk-options', JSON.stringify({
      masterVolume: this.masterVolume,
      musicVolume:  this.musicVolume,
      isFullscreen: this.isFullscreen,
    }));
  }

  goBack() {
    this.router.navigate(['/']);
  }
}