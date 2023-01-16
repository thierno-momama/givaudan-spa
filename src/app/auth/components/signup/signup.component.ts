import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import { Signup } from 'src/app/Signup';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  title: string = 'Create new account';
  faArrowRight = faArrowRight;
  profilForm = this.fb.group({
    fullname: [''],
    email: [''],
    password: ['']
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.info(this.profilForm.value);
    if(!this.profilForm.value.fullname || !this.profilForm.value.email || !this.profilForm.value.password){
      alert('Please enter values fields');
      return;
    }
    const newUser: Signup = {
      fullname: this.profilForm.value.fullname,
      email: this.profilForm.value.fullname,
      password: this.profilForm.value.password
    };
    this.authService.addSingup(newUser).subscribe(res => {
      alert('User add success');
      this.router.navigate(['login']);
    });
  }

}
