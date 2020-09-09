import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginsGuard } from './logins/logins.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'logins', loadChildren: './logins/logins.module#LoginsPageModule' },
  {
    path: 'home',
    canActivate: [LoginsGuard],
    loadChildren: './home/home.module#HomePageModule',
    // canLoad: [LoginsGuard]
  },
  {
    path: 'todo',
    canActivate: [LoginsGuard],
    loadChildren: './todo/todo.module#TodoPageModule',
    // canLoad: [LoginsGuard]
  },
  {
    path: 'logout',
    loadChildren: './logout/logout.module#LogoutPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
