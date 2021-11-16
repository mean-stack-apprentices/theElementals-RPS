import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signInForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  signIn() {
    console.log(this.signInForm.value)
    this.userService.signIn(this.signInForm.value).subscribe();
    this.router.navigate(['home'])
  }
}
