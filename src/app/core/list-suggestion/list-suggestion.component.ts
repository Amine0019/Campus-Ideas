import { Component } from '@angular/core';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {
  titre:string="Liste des suggestions";
  placeHolderTexte:string="Rechercher une suggestion";
  addToFavorite(){
    console.log("Ajouter aux favoris");
  }

}
