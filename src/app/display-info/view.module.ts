import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DisplayInfoComponent} from './display-info.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [DisplayInfoComponent],
    exports: [
        DisplayInfoComponent
    ]
})
export class viewModule {}