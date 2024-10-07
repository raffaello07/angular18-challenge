import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Use the app-product-list component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-store';
}
