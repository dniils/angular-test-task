import { Component } from '@angular/core';
import iconNames from './iconNames.json';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  names = iconNames;
  icon = this.names[this.getRandomInt(0, this.names.length - 1)];
  buttonClicked = false;
  buttonClickCount = 0;

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  clickEventHandler() {
    this.buttonClickCount++;

    window.setTimeout(() => {
      this.buttonClicked = true;
      this.icon = this.names[this.getRandomInt(0, this.names.length - 1)];
      this.buttonClickCount--;
    }, this.buttonClickCount * 3000);
  }
}
