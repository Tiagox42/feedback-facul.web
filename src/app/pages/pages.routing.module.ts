import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    // { path: '', redirectTo: 'first-page', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    // { path: 'product-details/:id', component: ProductDetails,
    //     children: [
    //         { path: '', redirectTo: 'overview', pathMatch: 'full' },
    //         { path: 'overview', component: Overview },
    //         { path: 'specs', component: Specs }
    //     ]
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
