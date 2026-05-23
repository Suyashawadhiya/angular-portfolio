import { Component, signal,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
    imports: [
    RouterOutlet,
    Navbar,
    Home,
    About,
    Skills,
    Projects,
    Experience,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
 ngOnInit(): void {

    AOS.init({
      duration: 1200
    });

  }

}