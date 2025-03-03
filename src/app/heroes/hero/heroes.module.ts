import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroComponent } from './hero.component';
import { ListComponent } from '../list/list.component';

@NgModule({
  exports: [HeroComponent, ListComponent],
  declarations: [HeroComponent, ListComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
