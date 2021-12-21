import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";

import { PostsListComponent } from "./posts/posts-list/posts-list.component";

const routes: Routes = [
  { path: "", component: PostsListComponent },
  { path: "adicionar", component: PostCreateComponent },
  { path: "editar/:id", component: PostCreateComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
