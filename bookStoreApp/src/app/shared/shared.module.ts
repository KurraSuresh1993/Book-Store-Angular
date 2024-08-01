import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent,
  ],
  imports: [RouterModule, MaterialModule, CommonModule],
  exports: [
    ToolbarComponent,
    FooterComponent,
    MaterialModule,
    AuthorsComponent,
  ],
})
export class SharedModule {}
