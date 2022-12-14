import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/interfaces';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent {

  open: boolean = false;
  selectedPokemon: Pokemon;

  @Input() pokemon: Pokemon;

  handleOpenDialog(pokemon: Pokemon): void{
    this.selectedPokemon = pokemon;
    this.toggleDialog()
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  handleCloseDialog(): void {
    this.open = !this.open
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }

  toggleDialog(): void {
    this.open = !this.open
  }
}
