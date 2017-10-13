import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDeetsComponent } from './components/user-deets/user-deets.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'user/:id', component:UserDeetsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserDeetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
