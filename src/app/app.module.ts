import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
//import { RouterModule,Routing } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginregistermodalComponent } from './components/loginregistermodal/loginregistermodal.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { PostComponent } from './components/post/post.component';
import { CategoryComponent } from './components/category/category.component';






const appRoutes: Routes =[
 {path:'', component:BodyComponent},
 {path:'post/:id', component:PostComponent},
 {path:'Category/:name', component:CategoryComponent}

 ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginregistermodalComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    BodyComponent,
    PostComponent,
    CategoryComponent,

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
