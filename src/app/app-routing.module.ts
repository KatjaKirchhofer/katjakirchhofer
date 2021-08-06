import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { DiscriptionComponent } from './discription/discription.component';

const routes: Routes = [
  { path: '', component: SlideshowComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'data-protection', component: DataProtectionComponent},
  { path: 'about-me', component: AboutMeComponent},
  { path: 'expercience', component: ExperienceComponent},
  { path: 'discription', component: DiscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
