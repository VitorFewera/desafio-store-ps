import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  imgFooter: string = 'assets/ps-footer.png';

  suporte: string = 'Suporte';
  suporteLink: string = 'https://www.playstation.com/pt-br/support/';

  termos: string = 'Termos de serviço da PSN';
  termosLink: string =
    'https://www.playstation.com/pt-br/legal/psn-terms-of-service/';

  politica: string = 'Política de privacidade';
  politicaLink: string =
    'https://www.playstation.com/pt-br/legal/privacy-policy/';

  politicaCancelamento: string = 'Política de cancelamento da PS Store';
  politicaCancelamentoLink: string =
    'https://www.playstation.com/pt-br/legal/playstation-store-cancellation-policy/';

    copyright: string = '© 2023 Sony Interactive Entertainment Inc. Todos os direitos reservados.';
    copyrightLink: string = 'https://www.playstation.com/ja-jp/legal/website-terms-of-use/#intellectual-property';
}
