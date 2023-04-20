import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.page.html',
  styleUrls: ['./listaproduto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListaprodutoPage implements OnInit {
  listaProduto: Produto[] = []

  constructor(private produtoService: ProdutoService) {
    this.buscarProduto();
  }
  ngOnInit(): void {
    
  }
  buscarProduto(){
    this.produtoService.getAll().subscribe(dados => {
      this.listaProduto = dados as Produto[];
    });
  }
}


