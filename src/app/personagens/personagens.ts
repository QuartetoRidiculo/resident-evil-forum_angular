import { Component } from '@angular/core';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-personagens',
  imports: [Header],
  templateUrl: './personagens.html',
  styleUrl: './personagens.css',
})
export class Personagens {
  personagens = [
    {
      imgUrl: 'assets/images/icons_personagens/Chris-Redfield.png',
      nome: 'Chris Redfield',
      cargo: 'Agente da B.S.A.A.',
      sobre:
        'Um dos membros originais da equipe S.T.A.R.S. e veterano no combate ao bioterrorismo. Chris...',
    },
    {
      imgUrl: 'assets/images/icons_personagens/Jill-Valentine.jpeg',
      nome: 'Jill Valentine',
      cargo: 'Ex-membro da S.T.A.R.S.',
      sobre:
        'Especialista em explosivos e uma das heroínas mais icônicas da franquia. Sobreviveu ao Incidente da Mansão e à...',
    },
    {
      imgUrl: 'assets/images/icons_personagens/Leon-S-Kennedy.jpg',
      nome: 'Leon S. Kennedy',
      cargo: 'Agente do Governo',
      sobre:
        'Ex-policial novato que sobreviveu à Raccoon City em seu primeiro dia de trabalho. Tornou-se agente especial do governo dos EUA.',
    },
    {
      imgUrl: 'assets/images/icons_personagens/Claire-Redfield.jpg',
      nome: 'Claire Redfield',
      cargo: 'Ativista da TerraSave',
      sobre:
        'Irmã mais nova de Chris Redfield. Estudante universitária que se tornou uma lutadora contra o bioterrorismo e...',
    },
    {
      imgUrl: 'assets/images/icons_personagens/Ada-Wong.jpg',
      nome: 'Ada Wong',
      cargo: 'Espiã Misteriosa',
      sobre:
        'Agente secreta com lealdades duvidosas. Trabalha nas sombras e aparece em momentos cruciais,...',
    },
    {
      imgUrl: 'assets/images/icons_personagens/Albert-Wesker.jpg',
      nome: 'Albert Wesker',
      cargo: 'Antagonista Principal',
      sobre:
        'Ex-capitão da S.T.A.R.S. e principal vilão da saga. Obcecado por poder e evolução humana, Wesker é uma das...',
    },
    {
      imgUrl: 'assets/images/icons_personagens/Ethan-Winters.jpg',
      nome: 'Ethan Winters',
      cargo: 'Protagonista de RE7/Village',
      sobre:
        'Homem comum que se viu envolvido em eventos sobrenaturais ao procurar sua esposa desaparecida. Protagonista...',
    },
    {
      imgUrl: 'assets/images/icons_personagens/Rebecca-Chambers.jpg',
      nome: 'Rebecca Chambers',
      cargo: 'Médica da B.S.A.A.',
      sobre:
        'A mais jovem membro da equipe Bravo dos S.T.A.R.S. Especialista em bioquímica que se tornou consultora...',
    },
  ];
}
