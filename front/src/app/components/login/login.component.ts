import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { map,first } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: any;
  public password: any;
  form!: FormGroup;
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;
  constructor(private apiService:ApiService, private router: Router, private formBuilder:FormBuilder){
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('jwt')!));
    this.user = this.userSubject.asObservable();
  }

  ngOnInit(){
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  get f(){ return this.form.controls}

  onSubmit(){
    console.log("allo")
    console.log(this.f)
    this.login("bilelelmestari4@gmail.com","azert")
      .pipe(first())
              .subscribe({
                  next: () => {
                      // get return url from query parameters or default to home page
                      this.router.navigateByUrl("/");
                  },
                  error: error => {
                    console.log(error);
                  }
              });
  }

  login(username:string, password:string){
    console.log("oui allo")
    return this.apiService.post("/login",{username:username,password:password})
      .pipe(map(user => {
        console.log("ça capte pas bien allo")
        localStorage.setItem('jwt', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }
}
