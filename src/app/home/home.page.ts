import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { OnlyPrototypeTComponent, OnlyPrototypeTService } from '@Only-Prototype-T';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, OnlyPrototypeTComponent],
})
export class HomePage {

  s = inject(OnlyPrototypeTService);

  constructor() {
  }
}
