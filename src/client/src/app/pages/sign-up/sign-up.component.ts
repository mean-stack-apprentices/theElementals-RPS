import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'express';
import { confirmPassword } from 'src/app/form-validators/create-user-form-validators';
import { UserService } from 'src/app/services/user.service';
import { tap, debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  validUsername: boolean = false
  createUserForm: FormGroup
  imageFileName = ''
  formData: FormData
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.formData = new FormData();
    this.createUserForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.compose([Validators.required, Validators.minLength(3),])],
      confirmPassword: ['',Validators.compose([Validators.required, Validators.minLength(3),])],
    }, {validators: confirmPassword})
   }

  ngOnInit(): void {
    this.createUserForm.controls.username.valueChanges.pipe(debounceTime(700)).subscribe(() => {
      this.checkValidUsername();
    })
  }

  checkValidUsername() {
    this.userService.validUsername(this.createUserForm.controls.username.value).pipe(tap(data => {
      this.validUsername = data.validUsername
    })).subscribe()
  }

  signUp() {
    if (this.createUserForm.invalid) {
      alert((this.createUserForm.errors));
    } else if (!this.validUsername) {
      alert('This username is taken, please try another');
    } else {
      const user = {
        username: this.createUserForm.controls.username.value,
        password: this.createUserForm.controls.password.value,
      }
      
      if (this.formData.get('profilePic')) {
        this.userService.uploadProfilePic(this.formData).subscribe((response)=>{
          this.userService.signUp({...user, profilePic: {
            picId: response.reqFile.id,
            filename: response.reqFile.filename
          }})
        });
        
      } else {
        this.userService.signUp(user)
      }
      
      
      
      // this.router.navigate(['home/sign-in']);
    }
  }

  makeFileReady(event: any) {
    const file = event.target.files[0]
    console.log(file)
    if(file) {
      this.imageFileName = file.name
      this.formData.append('profilePic', file);
      console.log('>>>>>', file)
      console.log(this.formData.get('profilePic'));
    }
  }
}