import { Component } from '@angular/core';
import { ClientMockService } from '../clientes-mocados.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.scss'
})
export class ModulosComponent {
    readonly modulos: string[] = [
      'FAQ',
      'SEGURANÇA',
      'MODALIDADES DE NEGÓCIOS',
      'AUTOATENDIMENTO',
      'INSTITUCIONAL',
      'IT SUPORTE',
    ];
  
    constructor(readonly Client: ClientMockService) {
  
    }
    ngOnInit(): void {
  
      // function clickName(modules: object, clients: ClientMockService ) : void {
      //     console.log( modules + ' ' + clients + '!');
      //     for (let i = 0; i < clients.clients.length;){
      //       console.log(clients.clients[i].admin)
      //       i++;
  
      //       if(clients.clients[i].admin == true){
      //         console.log(clients.clients[i].admin)
      //         console.log(modules)
  
      //         } else if (clients.clients[i].admin == false){
      //           console.log(clients.clients[i].admin)
      //           console.log(modules)
  
      //       } else {
      //         console.log("Usuário não encontrados")
      //       }
      //     }
      //   }
  
      //   clickName(this.modulos, this.Client);
        // console.log(clickName(this.modulos, this.Client));
  
      // Greet('Hello','Steve');//OK, returns "Hello Steve!"
      //console.log("tipo do modulos  " + typeof this.modulos);
  
      // for (let i = 0; i < this.Client.clients.length;){
      //   i++;
  
      //   if(this.Client.clients[i].admin == true){
      //     console.log(this.client.clients[i]);
      //     console.log('USUÁRIO ADMIN ------> ' + this.modulos)
  
      //     } else if (this.Client.clients[i].admin == false){
      //     console.log("tipo de dado   " + typeof this.client.clients[i]);
      //     console.log('USUÁRIO NÃO ADMIN --- >' +  this.modulos[0] + ', ' +  this.modulos[1]);
  
      //   } else {
      //     console.log("Usuário não encontrado")
      //   }
      // };
    }  
}
