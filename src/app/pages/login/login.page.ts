import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {
  username: string = ''
  password: string = ''
  constructor(private router: Router) {}

  login() {
    if (this.username === 'usuarioPrueba' && this.password === 'usuario1') {
      this.router.navigate(['/calculadora'])
    } else {
      this.router.navigate(['/error'])
    }
  }
}
