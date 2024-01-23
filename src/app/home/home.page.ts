import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: {
    id: string;
    name: string;
    checked: boolean;
  }[] = [
    {
      id: '1',
      name: 'Item 1',
      checked: true,
    },
    {
      id: '2',
      name: 'Item 2',
      checked: true,
    },
    {
      id: '3',
      name: 'Item 3',
      checked: true,
    },
    {
      id: '4',
      name: 'Item 4',
      checked: true,
    },
    {
      id: '5',
      name: 'Item 5',
      checked: true,
    },
  ];

  constructor() {}

  handleReorder(event: any) {
    if (event.target.tagName !== 'ION-REORDER-GROUP') {
      return;
    }

    event.detail.complete();
    console.log('handleReorder');
  }

  handleChecked(event: any) {
    if (event.target.tagName !== 'ION-CHECKBOX') {
      return;
    }

    console.log('handleChecked');
  }
}
