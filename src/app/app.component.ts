import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomSheetComponent } from "./bottom-sheet/bottom-sheet.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BottomSheetComponent]
})
export class AppComponent {
  title = 'bottom-sheet';
}
