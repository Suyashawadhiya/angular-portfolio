import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  darkMode = true;

  toggleTheme() {

    this.darkMode = !this.darkMode;

    document.body.classList.toggle('light-theme');

  }

}
