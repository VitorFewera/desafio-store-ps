import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

    imgMenuBar: string = 'assets/ps-logo.png';
    youtube: string ='https://www.youtube.com/@diomakethechange';
    link: string = 'https://www.linkedin.com/in/vitor-hugo-lopes-ferreira-524b0923a/';
    github: string = 'https://github.com/VitorFewera';
}
