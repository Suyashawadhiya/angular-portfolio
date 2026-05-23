import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

  ngAfterViewInit(): void {

    const typed = new Typed('.typing', {
      strings: [
        'Frontend Developer',
        'Angular Developer',
        'Python Enthusiast'
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true
    });

  }

}
