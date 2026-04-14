import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  links = [
    { name: 'Home', href: '/home' },
    { name: 'Biblioteca', href: '/biblioteca' },
    { name: 'Personagens', href: '/personagens' },
    { name: 'Galeria', href: '/galeria' },
  ];
   nome=localStorage.getItem("nome");
}
