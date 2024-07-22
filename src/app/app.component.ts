import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { ConfigService } from '../config-service.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yml-github-action';
  admin: string='';
  developer: string='';
  constructor(private configService: ConfigService) {}
  ngOnInit() {
    console.log('Checking window.__env:', (window as any).__env);

    // Type assertion to access global variables without a TypeScript interface
    const envConfig = (window as any).__env;

    this.admin = envConfig ? envConfig.admin : undefined;
    this.developer = envConfig ? envConfig.developer : undefined;

    console.log('Admin:', this.admin);
    console.log('Developer:', this.developer);

    this.admin = (window as any).__env?.admin;
    this.developer = (window as any).__env?.developer;

    console.log('Test Admin:', this.admin);
    console.log('Test Developer:', this.developer);
  }
}
