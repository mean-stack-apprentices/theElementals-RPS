import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { signIn } from 'src/app/store/user/actions/sign-in.action';
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
    private store: Store,
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
    //this.userService.signIn(this.signInForm.value).subscribe();
    this.store.dispatch(signIn(this.signInForm.value));
    this.router.navigate(['home'])
  }
}
