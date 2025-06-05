import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public isdarkMode: boolean = false;

  constructor() {}

  toggleTheme() {
    this.isdarkMode = !this.isdarkMode;
    console.log('Dark mode toggled:', this.isdarkMode);
  }
}
