import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent implements OnInit {

  produits! : Produit[];
  categories! : Categorie[];
  idCategorie!: number;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
    this.produits = [];
  }

  supprimerProduit(p: Produit)
  {
    let conf = confirm('Are you sure you want to remove this product?');
    if (conf) {
      this.produitService.supprimerProduit(p);
  }
  }

  onChange() {
    this.produits = this.produitService.RechercheParCategorie(this.idCategorie);
  }
}
