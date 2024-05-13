import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss'
})
export class BottomSheetComponent {
  public isShown = true;

  public show(): void {
    this.isShown = true;
  }

  public hide(): void {
    this.isShown = false;
  }
}
