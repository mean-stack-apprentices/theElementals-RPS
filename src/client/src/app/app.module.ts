import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = {
  url: !environment.production ? 
  'http://localhost:3000' : '', options: {} 
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    LeaderboardComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
