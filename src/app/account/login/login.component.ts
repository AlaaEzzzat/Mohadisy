import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginForm;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.LoginForm.value);
    this.auth
      .login(
        'https://app.mohandisy.com/api/Authenticate/userLogin',
        this.LoginForm.value
      )
      .subscribe((data) => {
        console.log(JSON.stringify(data.data));
        localStorage.setItem('token', JSON.stringify(data.data.token));
        localStorage.setItem('role', JSON.stringify(data.data.roles[0]));
        localStorage.setItem('name', JSON.stringify(data.data.username));
        localStorage.setItem('id', JSON.stringify(data.data.id));
        let roles = this.auth.getRole();
        if (roles == 'Admin') {
          this.router.navigate(['/Admin']);
        }
        if (roles == 'Service provider') {
          this.router.navigate(['/Spmanagement']);
        }
        if (roles == 'Client') {
          this.router.navigate(['/usermanagement/dashboard']);
        }
      });
  }
  ngOnInit(): void {}
}
