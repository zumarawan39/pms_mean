import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route:Router){}
  logOut(){
    localStorage.removeItem("token");
    localStorage.setItem("isteacher", ""); 
    this.route.navigate(['signin'])

  }
}
