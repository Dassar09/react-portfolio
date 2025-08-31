import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AngularComponentArchitectureBlog = () => {
  const componentExampleTS = `
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() userId: string;
  @Output() profileUpdated = new EventEmitter<User>();

  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.userService.getUserById(this.userId)
      .subscribe(user => this.user = user);
  }
}`;

  const componentExampleHTML = `
<div class="user-profile">
  <h2>{{ user.name }}</h2>
  <p>Email: {{ user.email }}</p>
  <button (click)="editProfile()">Edit Profile</button>
</div>`;

  const moduleExampleTS = `
@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserModule { }`;

  const dependencyInjectionExample = `
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(\`/api/users/\${id}\`);
  }
}`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Angular Component Architecture: A Comprehensive Guide
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Component Structure</h2>
        <p className="mb-4">
          Angular components are the building blocks of an application, combining 
          TypeScript logic, HTML templates, and CSS styles into a cohesive unit.
        </p>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Component Example</h3>
          <SyntaxHighlighter language="typescript" style={materialDark}>
            {componentExampleTS}
          </SyntaxHighlighter>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-2">Component Template</h3>
          <SyntaxHighlighter language="html" style={materialDark}>
            {componentExampleHTML}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Modules</h2>
        <p className="mb-4">
          Angular uses modules to organize and encapsulate related components, 
          services, and other features. The @NgModule decorator helps manage 
          dependencies and component declarations.
        </p>

        <SyntaxHighlighter language="typescript" style={materialDark}>
          {moduleExampleTS}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Dependency Injection</h2>
        <p className="mb-4">
          Angular's powerful dependency injection system allows for loose coupling 
          and easy management of services and dependencies.
        </p>

        <SyntaxHighlighter language="typescript" style={materialDark}>
          {dependencyInjectionExample}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Architectural Principles</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Modularity:</strong> Break down applications into small, 
            manageable components with single responsibilities.
          </li>
          <li>
            <strong>Declarative Templates:</strong> Use Angular's template syntax 
            to create dynamic, reactive user interfaces.
          </li>
          <li>
            <strong>Dependency Injection:</strong> Manage service dependencies 
            and promote loose coupling between components.
          </li>
          <li>
            <strong>RxJS Integration:</strong> Leverage observables for 
            handling asynchronous operations and event streams.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AngularComponentArchitectureBlog;