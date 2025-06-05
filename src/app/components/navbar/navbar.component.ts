import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public isdarkMode: boolean = false;
  themesrv = inject(ThemeService);

  ngOnInit(): void {
    this.isdarkMode = this.themesrv.isdarkMode;
  }

  toggleTheme() {
    this.themesrv.toggleTheme();
    this.isdarkMode = this.themesrv.isdarkMode;
    console.log('Locations fetched:', this.isdarkMode);
  }
}
