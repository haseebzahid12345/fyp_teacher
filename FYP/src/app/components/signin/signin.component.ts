// signin.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';  // Adjust the import path accordingly
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Call the login() method from the AuthService
    this.authService.login();
    this.router.navigate(['/home-after-login']);

    // Navigate to the desired page after login
    // (e.g., navigate to 'home-after-login')
    // This should be handled based on your routing setup
  }
}
