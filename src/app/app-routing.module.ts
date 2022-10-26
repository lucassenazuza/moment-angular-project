import { EditMomentComponent } from './component/pages/edit-moment/edit-moment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/pages/about/about.component';
import { HomeComponent } from './component/pages/home/home.component';
import { NewComponentComponent } from './component/pages/new-component/new-component.component';
import { MomentComponent } from './component/pages/moment/moment.component';


const routes: Routes = [{ path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'moments/new', component: NewComponentComponent },
      { path: 'moment/:id', component: MomentComponent },
      { path: 'moment/edit/:id', component: EditMomentComponent },
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
