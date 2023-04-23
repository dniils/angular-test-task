import { Component } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { IconName } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  iconKeys = Object.keys(icons).filter(
    (key) => key.toLowerCase() !== 'fas' && key.toLowerCase() !== 'prefix'
  );

  iconKey = this.iconKeys[this.getRandomInt(0, this.iconKeys.length - 1)];

  icon = icons[this.iconKey as keyof typeof icons] as IconName;
  buttonClicked = false;
  buttonClickCount = 0;

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  clickEventHandler() {
    this.buttonClickCount++;

    window.setTimeout(() => {
      this.buttonClicked = true;
      this.iconKey =
        this.iconKeys[this.getRandomInt(0, this.iconKeys.length - 1)];
      this.icon = icons[this.iconKey as keyof typeof icons] as IconName;
      this.buttonClickCount--;
    }, this.buttonClickCount * 3000);
  }
}
