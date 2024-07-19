import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NotFoundComponent, ToolbarComponent, FooterComponent],
  imports: [RouterModule, MaterialModule],
  exports: [ToolbarComponent, FooterComponent],
})
export class SharedModule {}
