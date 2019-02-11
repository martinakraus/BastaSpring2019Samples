import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [ UiModule ],
  exports: [ UiModule, CommonModule ],
})
export class SharedModule {
}
