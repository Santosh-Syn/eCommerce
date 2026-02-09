import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserRole } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class Register {
  
  private formBuilder = inject(FormBuilder);

  constructor(private authService: AuthService) {
  }

  
  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
  });


  register(name: string, email: string, role: string) {
    this.authService.login({
      id: Date.now(),
      name: name,
      email: email,
      role: role as UserRole
    });
  }

  onSubmit() {
    let name = this.userForm.controls.name.value ?? '';
    let email = this.userForm.controls.email.value ?? '';
    let role = this.userForm.controls.role.value ?? '';

    this.register(name, email, role);
  }

  onCancelClick() {
    this.authService.showUserForm$.next(false);
  }

}
