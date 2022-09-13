import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetUserComponent } from './get-user/get-user.component';
import { PostUserComponent } from './post-user/post-user.component';
import { PutPatchUserComponent } from './put-patch-user/put-patch-user.component';

const routes: Routes=[
  {path:'', redirectTo:'/users', pathMatch:'full'},
  {path:'users', component:GetUserComponent},
  {path:'users/get-user', component:PostUserComponent},
  {path:'users/put-user/:id', component:PutPatchUserComponent},
  {path:'users/patch-user/:id', component:PutPatchUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    PostUserComponent,
    PutPatchUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
