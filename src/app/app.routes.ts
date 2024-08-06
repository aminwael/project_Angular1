import { Routes } from '@angular/router';
import { StartFrameWorkComponent } from './start-frame-work/start-frame-work.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path:"",component:StartFrameWorkComponent},
  {path:"startframework",component:StartFrameWorkComponent},
  {path:"about",component:AboutComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"contact",component:ContactComponent},
];
