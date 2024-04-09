import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LikeComponent } from './like/like.component';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appControlVehicular';
}
