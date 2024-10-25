import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faHome,faInfoCircle,faStar,faBriefcase,faEnvelope,faPhone,faArrowDown,faUser,faLaptopCode,faSearch,faBullhorn,faLink,faEye,faMapMarkerAlt, faBars, faCalendarAlt,} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
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
  faCalendar = faCalendarAlt;
  
  words = ["front end developer", "web designer","app developer", "graphic designer"];
  displayedText = '';
  currentWordIndex = 0;
  letterIndex = 0;

  educations = [
    { startDate: "01-Jan-2024", endDate: "31-Dec-2026", level: "Master Degree", para: "Lorem ipsum dolor sit amet elit suscipit orci." },
    { startDate: "01-Jan-2021", endDate: "31-Dec-2024", level: "Bachelor Degree", para: "Lorem ipsum dolor sit amet elit suscipit orci." },
    { startDate: "01-Jan-2020", endDate: "31-Dec-2021", level: "Associate Degree", para: "Lorem ipsum dolor sit amet elit suscipit orci." },
    {startDate:"01-Jan-2017",endDate:"31-Dec-2020",level:"High School",para:"Lorem ipsum dolor sit amet elit suscipit orci."}
  ]

  ngOnInit() {
    this.startTyping();
  }

  startTyping() {
    setInterval(() => {
      if (this.letterIndex < this.words[this.currentWordIndex].length) {
        this.displayedText += this.words[this.currentWordIndex][this.letterIndex];
        this.letterIndex++;
      } else {
        // Move to the next word after a short pause
        setTimeout(() => {
          this.letterIndex = 0;
          this.displayedText = '';
          this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        }, 1000); // 1 second pause between words
      }
    }, 100); // Adjust typing speed here
  }
}
