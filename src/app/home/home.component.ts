import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faHome,faInfoCircle,faStar,faBriefcase,faEnvelope,faPhone,faArrowDown,faUser,faLaptopCode,faSearch,faBullhorn,faLink,faEye,faMapMarkerAlt, faBars,} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faHome = faHome;
  faInfoCircle = faInfoCircle;
  faStar = faStar;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faArrowDown = faArrowDown;
  faUser = faUser;
  faLaptopCode = faLaptopCode;
  faSearch = faSearch;
  faBullhorn = faBullhorn;
  faLink = faLink;
  faEye = faEye;
  faMapMarkerAlt = faMapMarkerAlt;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faBars = faBars;
}
