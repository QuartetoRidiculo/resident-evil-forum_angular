import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import {Header} from "../components/header/header"

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, Header ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

  imagens: { imgURL: string; titulo: string; descricao: string }[] = [
    {
      imgURL: 'assets/images/resident_evil2/re2.jpg',
      titulo: "Resident Evil 2",
      descricao: "O remake que redefiniu os padrões do survival horror moderno.",
    },
    {
      imgURL: 'assets/images/resident_evil4/library_hero.jpg',
      titulo: "Resident Evil 4",
      descricao: "Uma obra-prima reinventada para uma nova geração.",
    },
    {
      imgURL: 'assets/images/resident_evil8/library_hero.jpg',
      titulo: "Resident Evil Village",
      descricao: "Terror gótico europeu encontra a saga Resident Evil.",
    }
  ];

}