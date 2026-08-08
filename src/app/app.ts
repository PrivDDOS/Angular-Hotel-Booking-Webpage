import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ClipboardModule],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('hotel-booking');

  isClick = false;
  passwordCopy = 'soleil-2026';

  burgerMenu(): void {
    this.isClick = !this.isClick;
  }
}
