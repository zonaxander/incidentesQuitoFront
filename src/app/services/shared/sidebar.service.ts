import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo: 'Incidentes',
      icono: 'ik ik-align-justify',
      url: '/incidentes',
      submenu:[
        { titulo: 'Dashboard', url: '/dashboard' },
      ]
    },{
      titulo: 'Catalogos',
      icono: 'ik ik-bar-chart-line',
      url: '/catalogo',
      submenu:[
        { titulo: 'Template & Plugins', url: '/template' },
      ]
    },{
      titulo: 'Usuario',
      icono: 'ik ik-user',
      url: '/perfil',
      submenu:[
        { titulo: 'Perfil', url: '/perfil' },
      ]
    }
  ];
  constructor() {

  }

}
