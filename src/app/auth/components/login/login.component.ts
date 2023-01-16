import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import { Signup } from 'src/app/Signup';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  title: string = 'Sign-in';
  faArrowRight = faArrowRight;
  profileForm = this.fb.group({
    email: [''],
    password: ['']
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.profileForm.value);
    if(!this.profileForm.value.email || !this.profileForm.value.password){
      alert('Please enter login values');
      return;
    }else{
      this.authService.getSignup().subscribe(value => {
        const user = value.find((a: Signup) => {
          return a.email === this.profileForm.value.email && a.password === this.profileForm.value.password
        });

        if(user){
          alert('Login success');
          this.profileForm.reset();
          this.router.navigate(['dashboard']);
        }else{
          alert('User not found...!');
        }
      }, err => {
        alert('Error...');
      });
    }


  }

}
