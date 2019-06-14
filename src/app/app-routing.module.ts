import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { ExamplesComponent } from './examples/examples.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: 'examples', component: ExamplesComponent },
  { path: 'display', component: DisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  AnimationsComponent,
  ExamplesComponent,
  DisplayComponent
];
