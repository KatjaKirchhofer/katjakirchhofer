import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MenuComponent } from './menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsetComponent } from './skillset/skillset.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    FooterComponent,
    IntroComponent,
    ExperienceComponent,
    AboutMeComponent,
    SkillsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
