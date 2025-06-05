import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample-provider',
  standalone: false,
  templateUrl: './sample-provider.component.html',
  styleUrl: './sample-provider.component.css',
})
export class SampleProviderComponent {
  @Input() text: string = '';
}
