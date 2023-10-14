import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Properties} from "../../api.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent{

  @Input() product!: Properties;


}
