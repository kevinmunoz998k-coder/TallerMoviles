import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ErrorPage {

  constructor(private router: Router) { }

  goToLogin(){
    this.router.navigate(['/login'])
  }

}
