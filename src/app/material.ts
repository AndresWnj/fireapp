import { NgModule } from '../../node_modules/@angular/core';

//Toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

//Icons
import {MatIconModule} from '@angular/material/icon';

//Buttons
import {MatButtonModule} from '@angular/material/button';

@NgModule({
 imports: [MatButtonModule, MatToolbarModule, MatIconModule],
 exports: [MatButtonModule, MatToolbarModule, MatIconModule],
})

export class MaterialModule { }
