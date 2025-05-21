import { Component } from '@angular/core';
import { DeepLinkService } from '@cloud-factory/shared-core-state';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'scanbeton-app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class AppComponent {
  constructor(public deepLinkService: DeepLinkService) {}
}
