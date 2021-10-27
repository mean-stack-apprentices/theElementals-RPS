import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './components/play/play.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent,
    children: [
      {path:'play', component: PlayComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
