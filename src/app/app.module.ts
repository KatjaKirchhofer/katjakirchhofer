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
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { GithubComponent } from './github/github.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ContactComponent } from './contact/contact.component';
import { SplitterComponent } from './splitter/splitter.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { AngularComponent } from './my-projects/angular/angular.component';
import { JavascriptComponent } from './my-projects/javascript/javascript.component';
import { CssComponent } from './my-projects/css/css.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    SkillsetComponent,
    MyProjectsComponent,
    GithubComponent,
    TechnologiesComponent,
    ContactComponent,
    SplitterComponent,
    HomeComponent,
    AngularComponent,
    JavascriptComponent,
    CssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
