import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  

  @Input() darkMode = true;
  constructor() { }

  ngOnInit(): void {
  }

  // scrollToProjects(){
    
  //   document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  // }
  scrollToArea(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

}
