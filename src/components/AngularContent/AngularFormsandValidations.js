import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AngularFormsAndValidationsBlog = () => {
    const formsComparisonTable = `
| Aspect         | Template-Driven Forms     | Reactive Forms                   |
|----------------|---------------------------|----------------------------------|
| Setup          | Simple, minimal code      | More explicit, programmatic      |
| Validation     | Handled in template       | Handled in component class       |
| Flexibility    | Limited                   | High, supports complex scenarios |
| Testing        | Harder to unit test       | Easier to unit test              |`;
  return (
    <div className="angular-blog-container">
      <article>
        <section>
          <h3>Understanding Angular Forms: A Comprehensive Guide</h3>
          <p>
            Angular provides two powerful approaches to handling forms: Template-driven Forms and Reactive Forms. 
            Each approach has its strengths and use cases, offering developers flexible solutions for form management 
            and validation.
          </p>
        </section>

        <section>
          <h4>1. Template-Driven Forms</h4>
          <p>
            Template-driven forms are the simplest way to create forms in Angular. They rely on two-way data binding 
            and directives to handle form control and validation directly in the template.
          </p>

          <div className="code-example">
            <h5>Template-Driven Form Example:</h5>
            <SyntaxHighlighter language="typescript" style={materialDark}>
              {`// user-registration.component.ts
@Component({
  selector: 'app-user-registration',
  template: \`
    <form #registrationForm="ngForm" (ngSubmit)="onSubmit()">
      <input 
        type="text" 
        name="username" 
        [(ngModel)]="user.username" 
        required 
        #username="ngModel"
      >
      <div *ngIf="username.invalid && (username.dirty || username.touched)">
        <small>Username is required</small>
      </div>
      
      <input 
        type="email" 
        name="email" 
        [(ngModel)]="user.email" 
        required 
        email 
        #email="ngModel"
      >
      <div *ngIf="email.invalid && (email.dirty || email.touched)">
        <small *ngIf="email.errors?.['required']">Email is required</small>
        <small *ngIf="email.errors?.['email']">Invalid email format</small>
      </div>
      
      <button type="submit" [disabled]="!registrationForm.form.valid">
        Register
      </button>
    </form>
  \`
})
export class UserRegistrationComponent {
  user = {
    username: '',
    email: ''
  };

  onSubmit() {
    if (this.registrationForm.valid) {
      // Process form submission
      console.log(this.user);
    }
  }
}`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section>
          <h4>2. Reactive Forms</h4>
          <p>
            Reactive Forms provide a model-driven approach to handling forms. They offer more flexibility, 
            complex validation scenarios, and are easier to unit test.
          </p>

          <div className="code-example">
            <h5>Reactive Form Example:</h5>
            <SyntaxHighlighter language="typescript" style={materialDark}>
              {`// user-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  template: \`
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input 
        formControlName="username" 
        placeholder="Username"
      >
      <div *ngIf="profileForm.get('username').invalid && 
                  (profileForm.get('username').dirty || profileForm.get('username').touched)">
        <small *ngIf="profileForm.get('username').errors?.['required']">
          Username is required
        </small>
        <small *ngIf="profileForm.get('username').errors?.['minlength']">
          Username must be at least 4 characters
        </small>
      </div>

      <input 
        formControlName="email" 
        placeholder="Email"
      >
      <div *ngIf="profileForm.get('email').invalid && 
                  (profileForm.get('email').dirty || profileForm.get('email').touched)">
        <small *ngIf="profileForm.get('email').errors?.['required']">
          Email is required
        </small>
        <small *ngIf="profileForm.get('email').errors?.['email']">
          Invalid email format
        </small>
      </div>

      <button type="submit" [disabled]="!profileForm.valid">
        Update Profile
      </button>
    </form>
  \`
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      username: ['', [
        Validators.required, 
        Validators.minLength(4)
      ]],
      email: ['', [
        Validators.required, 
        Validators.email
      ]]
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section>
          <h4>3. Custom Validators</h4>
          <p>
            Angular allows you to create custom validators for complex validation scenarios that go beyond 
            built-in validators.
          </p>

          <div className="code-example">
            <h5>Custom Validator Example:</h5>
            <SyntaxHighlighter language="typescript" style={materialDark}>
              {`// custom-validators.ts
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  // Custom validator to check password strength
  static passwordStrength(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    
    // Check if password meets complexity requirements
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && 
                          hasNumber && hasSpecialChar && value.length >= 8;

    return passwordValid ? null : { 
      passwordStrength: {
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChar
      }
    };
  }
}

// Usage in Reactive Form
this.fb.group({
  password: ['', [
    Validators.required, 
    CustomValidators.passwordStrength
  ]]
})`}
            </SyntaxHighlighter>
          </div>
        </section>

        <section>
        <h4>4. Key Differences: Template-Driven vs Reactive Forms</h4>
        <SyntaxHighlighter language="markdown" style={materialDark}>
          {formsComparisonTable}
        </SyntaxHighlighter>
        </section>

        <section>
          <h4>5. Best Practices</h4>
          <ul>
            <li>Use Reactive Forms for complex forms and dynamic form controls</li>
            <li>Implement client-side validation for immediate user feedback</li>
            <li>Always validate data on the server-side as well</li>
            <li>Provide clear, descriptive error messages</li>
            <li>Consider accessibility when designing form validation</li>
          </ul>
        </section>

        <section className="conclusion">
          <h4>Conclusion</h4>
          <p>
            Angular's form handling and validation mechanisms provide robust tools for creating 
            interactive and secure web applications. Whether you choose template-driven or reactive 
            forms depends on your specific use case and complexity requirements.
          </p>
        </section>
      </article>
    </div>
  );
};

export default AngularFormsAndValidationsBlog;