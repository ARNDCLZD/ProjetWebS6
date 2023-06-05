import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isLoggedIn : any;
  userSubject: any;
  user: any;
  constructor(private router:Router){
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('jwt')!));
    this.user = this.userSubject.asObservable();
    this.user.subscribe((token: any) => {this.isLoggedIn = !!token});
  }

  logOut(){
    localStorage.removeItem('jwt');
    this.userSubject.next(null);
    this.router.navigate(['/']);
    window.location.reload();
  }

}
