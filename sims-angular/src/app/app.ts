import { Component, effect, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router, RouterOutlet } from '@angular/router';
import { Footer } from './component/footer/footer';
import { HeaderTopBar } from './component/header-top-bar/header-top-bar';
import { AppService } from './services/application/app-service';
import { LoginEventService } from './services/application/login-event-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderTopBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
