import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  createUserForm: FormGroup
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) {
    this.createUserForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.compose([Validators.required, Validators.minLength(3),])],
      confirmPassword: ['',Validators.compose([Validators.required, Validators.minLength(3),])],
    })
   }

  ngOnInit(): void {
  }

  signUp() {
    
  }
}
