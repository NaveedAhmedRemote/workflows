// src/app/services/config.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private env: { [key: string]: string } = {};

  constructor() {
    this.env = (window as any).__env;
  }

  get admin(): string {
    return this.env['admin'];
  }

  get developer(): string {
    return this.env['developer'];
  }
}
