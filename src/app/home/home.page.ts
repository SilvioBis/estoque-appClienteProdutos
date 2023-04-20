import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/Cliente.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage { 
  listaClientes: Cliente[] = []

  constructor(private ClientesService: ClienteService) {
    this.buscarClientes();
  }

  buscarClientes(){
    this.ClientesService.getAll().subscribe(dados => {
      this.listaClientes = dados as Cliente[];
    });
  }
}
