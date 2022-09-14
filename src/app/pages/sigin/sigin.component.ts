import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent implements OnInit {
  formR!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formR = this.formBuilder.group({
      correo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  onCreate() {
    console.log(this.formR.value);
    if (this.formR.valid) {
      this.authService
        .createUser({
          email: 'test2@test.com',
          password: '123456',
          returnSecureToken: true,
        })
        .subscribe((res) => {
          console.log('CREATE USER: ', res);
        });
    }
  }
}
