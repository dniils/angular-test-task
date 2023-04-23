import { Component } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  fasIcons = Object.keys(icons)
    .filter(
      (key) => key.toLowerCase() !== 'fas' && key.toLowerCase() !== 'prefix'
    )
    .map((el) => this.handleIconName(el));

  icon = this.fasIcons[this.getRandomInt(0, this.fasIcons.length - 1)];
  buttonClicked = false;
  buttonClickCount = 0;

  removeFa(str: string): string {
    return str.replace(/fa/g, '');
  }

  toKebabCase(str: string): string {
    return str.replace(/[A-Z0-9]/g, (match, index) => {
      if (index === 0) {
        return match.toLowerCase();
      } else if (/[A-Z]/.test(match)) {
        return '-' + match.toLowerCase();
      } else {
        return '-' + match;
      }
    });
  }

  manageNameExceptions(str: string): string {
    switch (str) {
      case 'stopwatch-2-0':
        return 'stopwatch-20';
      case 'pastarianism':
        return 'spaghetti-monster-flying';
      case 'dice-d-6':
        return 'dice-d6';
      case 'dice-d-2-0':
        return 'dice-d20';
      default:
        return str;
    }
  }

  handleIconName(el: string): string {
    return this.manageNameExceptions(this.toKebabCase(this.removeFa(el)));
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  clickEventHandler() {
    this.buttonClickCount++;

    window.setTimeout(() => {
      this.buttonClicked = true;
      this.icon = this.fasIcons[this.getRandomInt(0, this.fasIcons.length - 1)];
      this.buttonClickCount--;
    }, this.buttonClickCount * 3000);
  }
}
