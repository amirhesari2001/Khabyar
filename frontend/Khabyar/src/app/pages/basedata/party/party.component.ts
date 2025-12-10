import { cilList, cilShieldAlt } from '@coreui/icons';
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
  NavComponent,
  NavItemComponent,
  RowComponent,
} from '@coreui/angular';
import { DefaultFooterComponent } from '../../../layout';
import { IconComponent, IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'app-party',
  imports: [
    IconModule,
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
    NavComponent,
    NavItemComponent
    // FormSelectDirective,
    // FormCheckComponent,
    // FormCheckInputDirective,
    // FormCheckLabelDirective,
    // ButtonDirective,
    // ColDirective,
    // InputGroupComponent,
    // InputGroupTextDirective,
  ],
  templateUrl: './party.component.html',
  styleUrl: './party.component.scss',
})
export class PartyComponent {
  icons = { cilList, cilShieldAlt };

}
