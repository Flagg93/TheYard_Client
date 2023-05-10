import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LandingPage implements OnInit {

  constructor(private auth:AuthService, private router: Router) { }

  GoToLogin():void{
    this.router.navigate(['login']);

  }

  GoToSignUp():void{
    this.router.navigate(['signup']);
  }

  ngOnInit():void {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['home']);
    }
  }

}
