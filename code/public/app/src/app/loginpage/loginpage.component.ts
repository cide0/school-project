import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  togglePassword(){
    let passwordInput =  <HTMLInputElement>document.getElementById('password')!;
    let passwordToggleIcon = document.getElementById('togglePassword')!;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggleIcon.style.color = getComputedStyle(document.body).getPropertyValue('--secondary-color-hover');
    } else {
      passwordInput.type = "password";
      passwordToggleIcon.classList.remove('password-shown');
      passwordToggleIcon.style.color = '#000';
    }
  }
}
