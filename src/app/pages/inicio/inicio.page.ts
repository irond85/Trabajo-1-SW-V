import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'flash',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'finger-print',
      name: 'About',
      redirectTo: '/about'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
