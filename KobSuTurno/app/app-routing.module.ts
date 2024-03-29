import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './views/config/config.component';
import { CreateRepertorieComponent } from './views/create-repertorie/create-repertorie.component';
import { DetailRepertorieComponent } from './views/detail-repertorie/detail-repertorie.component';
import { ListRepertorieComponent } from './views/list-repertorie/list-repertorie.component';
import { NextSongComponent } from './views/next-song/next-song.component';

const routes: Routes = [
  {path: '', redirectTo: 'next', pathMatch: 'full'},
  {path:"list", component: ListRepertorieComponent},
  {path:"create", component: CreateRepertorieComponent},
  {path:"repertorie/:id", component: DetailRepertorieComponent },
  {path:"next", component: NextSongComponent},
  {path:"config", component: ConfigComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
