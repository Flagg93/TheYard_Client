import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {
  fullName: string = "";
  displayName: string = "";
  email: string = "";
  email_confirm: string = "";
  password: string = "";
  password_confirm: string = "";


  constructor(public auth: AuthService) { }

  submit(){
    if(this.password != this.password_confirm){
      alert("Warning! Passwords don't match!");
    }
    else{
      if(this.email != this.email_confirm){
        alert("Warning! emails don't match!");
      }
      else{
        this.a

      }
    }

  }

  ngOnInit() {
  }

}
