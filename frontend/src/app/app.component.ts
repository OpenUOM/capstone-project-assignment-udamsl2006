import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar">
      <span class="brand">School Management System</span>
      <div class="nav-links">
        <a routerLink="/teachers" routerLinkActive="active">Teachers</a>
        <a routerLink="/students" routerLinkActive="active">Students</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .navbar {
      background-color: #2c3e50;
      color: white;
      padding: 14px 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .brand {
      font-size: 20px;
      font-weight: bold;
    }
    .nav-links a {
      color: #ccc;
      text-decoration: none;
      margin-left: 20px;
      font-size: 16px;
      padding: 6px 12px;
      border-radius: 4px;
      transition: background 0.2s;
    }
    .nav-links a:hover, .nav-links a.active {
      color: white;
      background-color: #4a90e2;
    }
  `]
})
export class AppComponent {
  title = 'School Management System';
}
