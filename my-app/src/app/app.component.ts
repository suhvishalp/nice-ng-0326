import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header.component';
import { LeftPanelComponent } from "./left-panel/left-panel.component";
import { RightPanelComponent } from "./right-panel/right-panel.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LeftPanelComponent, RightPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
