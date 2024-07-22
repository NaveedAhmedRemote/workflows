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
    this.admin = this.configService.admin;
    this.developer = this.configService.developer;
    console.log('Admin:', this.admin);
    console.log('Developer:', this.developer);
  }
}
