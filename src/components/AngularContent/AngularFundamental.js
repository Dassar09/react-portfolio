import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AngularFundamentalsBlog = () => {
  // TypeScript Component Example
  const componentExample = `
@Component({
  selector: 'app-user-profile',
  template: \`
    <div class="user-profile">
      <h2>{{ username }}</h2>
      <p>Email: {{ email }}</p>
    </div>
  \`,
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  username: string = 'John Doe';
  email: string = 'john.doe@example.com';

  updateProfile() {
    // Method implementation
  }
}`;

  // Dependency Injection Example
  const dependencyInjectionExample = `
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
}

@Component({
  selector: 'app-user-list',
  template: '...'
})
export class UserListComponent {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => this.users = users
    );
  }
}`;

  return (
    <div className="max-w-4xl mx-auto p-6 prose lg:prose-xl">
      <h2 className="text-3xl font-bold mb-6">Mastering Modern Web Application Development with Angular</h2>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
        <p>In the ever-evolving landscape of web development, Angular stands out as a powerful and comprehensive framework that empowers developers to build robust, scalable, and efficient web applications. This comprehensive guide will dive deep into the core fundamentals of Angular, exploring its key features, architecture, and why it has become a go-to framework for enterprise-level web development.</p>
      </section>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">What is Angular?</h3>
        <p>Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and a community of individuals and corporations. Unlike its predecessor AngularJS, Angular (often referred to as Angular 2+) is a complete rewrite that offers a modern, component-based architecture designed to address the complex challenges of contemporary web application development.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Key Architecture Principles</h3>
        <ol>
          <li><strong>Component-Based Architecture:</strong> Angular embraces a component-driven approach, where the UI is built using independent, reusable components.</li>
          <li><strong>Dependency Injection:</strong> A powerful mechanism for managing dependencies and creating loosely coupled, maintainable code.</li>
          <li><strong>TypeScript Integration:</strong> Leveraging TypeScript's strong typing and object-oriented programming features.</li>
          <li><strong>Reactive Programming:</strong> Built-in support for RxJS, enabling complex asynchronous operations.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Component Example</h3>
        <p>Here's a typical Angular component demonstrating its structure and key characteristics:</p>
        <SyntaxHighlighter language="typescript" style={materialDark}>
          {componentExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Dependency Injection in Action</h3>
        <p>Angular's dependency injection system provides a clean way to manage service dependencies:</p>
        <SyntaxHighlighter language="typescript" style={materialDark}>
          {dependencyInjectionExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Core Advantages of Angular</h3>
        <ul>
          <li><strong>Enterprise-Ready:</strong> Robust framework with built-in best practices</li>
          <li><strong>Performance Optimization:</strong> Advanced change detection and rendering strategies</li>
          <li><strong>Comprehensive Ecosystem:</strong> Rich set of built-in tools and libraries</li>
          <li><strong>Strong Community Support:</strong> Backed by Google and a large developer community</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Learning Path</h3>
        <p>To master Angular, focus on:</p>
        <ol>
          <li>TypeScript fundamentals</li>
          <li>Component lifecycle and architecture</li>
          <li>Dependency injection</li>
          <li>RxJS and reactive programming</li>
          <li>Angular CLI and tooling</li>
          <li>State management</li>
        </ol>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p>Angular provides a comprehensive solution for building modern web applications. Its robust architecture, powerful features, and continuous improvements make it an excellent choice for developers seeking to create scalable and maintainable web applications.</p>
      </section>
    </div>
  );
};

export default AngularFundamentalsBlog;