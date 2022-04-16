import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileType, MfeUtil } from '@ddggroup/angular-lib';

export const mfe = new MfeUtil();

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'restaurants',
    loadChildren: () => mfe.loadRemoteFile({
      remoteName: "restaurant",
      remoteEntry: `http://127.0.0.1:4202/remoteRestaurant.js`,
      exposedFile: "RestaurantModule",
      exposeFileType: FileType.Module
    }).then((m) => m.RestaurantModule),
  },
  {
    path: 'rootapps',
    loadChildren: () => mfe.loadRemoteFile({
      remoteName: "rootapp",
      remoteEntry: `http://127.0.0.1:4200/remoteRootapp.js`,
      exposedFile: "RootappModule",
      exposeFileType: FileType.Module
    }).then((m) => m.RootappModule),
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
