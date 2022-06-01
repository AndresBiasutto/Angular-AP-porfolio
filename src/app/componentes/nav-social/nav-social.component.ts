import { Component, OnInit } from '@angular/core';

import { faFacebookSquare , faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-nav-social',
  templateUrl: './nav-social.component.html',
  styleUrls: ['./nav-social.component.css']
})
export class NavSocialComponent implements OnInit {
facebook = faFacebookSquare;
linkedin = faLinkedin;
faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }
 

}
