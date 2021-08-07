import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { IntroComponent } from './intro/intro.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '', component: SlideshowComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'data-protection', component: DataProtectionComponent},
  { path: 'intro', component: IntroComponent},
  { path: 'expercience', component: ExperienceComponent},
  { path: 'about-me', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
