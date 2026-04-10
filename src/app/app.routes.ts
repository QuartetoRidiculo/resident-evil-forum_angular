import { Routes } from '@angular/router';
import { Biblioteca } from './biblioteca/biblioteca';
import { Personagens } from './personagens/personagens';
import { Galeria } from './galeria/galeria';
import { Home } from './home/home';
import { Login } from './login/login';

export const routes: Routes = [
    {path: "", component: Login},
    {path: "biblioteca", component: Biblioteca},
    {path: "personagens", component: Personagens},
    {path: "galeria", component: Galeria},
    {path: "home", component: Home}
];
