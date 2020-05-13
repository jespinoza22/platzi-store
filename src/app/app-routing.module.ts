import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { PreloadService } from './core/services/preload.service';

import { QuicklinkModule } from 'ngx-quicklink';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
       {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
       },
       {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: { preload: true }
       },
       {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
        data: { preload: true }
       },
       {
         path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
        data: { preload: true }
       },
       {
         path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
       },
       {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
       },
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: QuicklinkModule,
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
