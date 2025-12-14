import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  FooterComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  HeaderNavComponent,
  NavComponent,
  NavItemComponent,
  RowComponent,
} from '@coreui/angular';
import { IconComponent, IconModule } from '@coreui/icons-angular';
import { DefaultFooterComponent } from '../../../layout';

@Component({
  selector: 'app-rate',
  imports: [
    IconModule,
    HeaderNavComponent,
    CardHeaderComponent,
    FooterComponent,
    IconComponent,
    ButtonDirective,
    CardComponent,
    CardBodyComponent,
    ColComponent,
    RowComponent,
    FormDirective,
    DefaultFooterComponent,
    FormControlDirective,
    FormLabelDirective,
    ContainerComponent,
    NavItemComponent
  ],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss',
})
export class RateComponent {

}
