import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { Menubar, MenubarModule, MenubarPassThrough } from 'primeng/menubar';

@Component({
  selector: 'app-header-top-bar',
  imports: [MenubarModule, AvatarModule, RouterLink, ImageModule],
  templateUrl: './header-top-bar.html',
  styleUrl: './header-top-bar.css',
})
export class HeaderTopBar {}
