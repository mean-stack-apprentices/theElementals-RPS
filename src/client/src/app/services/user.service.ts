import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../../../../shared/models/user.model.js'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  signIn(user: User) {
    return this.api.post<{data: User}, User>('sign-in', user)
  }
  signUp(user: User) {
    return this.api.post<{message: string}, User>('sign-up', user).subscribe()
  }
  validUsername(username: string) {
    return this.api.post<{validUsername:  boolean}, {username:string}>('vaid-username', {username})
  }
  uploadProfilePic(formData: FormData) {
    return this.api.post<any, any>('upload-profilePic', formData).subscribe();
  }
}
