import { Component } from '@angular/core';

@Component({
  selector: 'app-like',

  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
   message = 'Like';
   disablebuttton = false;

   clickButton() {
     this.disablebuttton = true;
   }
}
