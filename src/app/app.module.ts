import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ListarUsersComponent } from './components/listar-users/listar-users.component';
import { AuthService } from './services/auth.service';
import { CrearComponent } from './components/crear/crear.component';
import { PatchUserComponent } from './components/patch-user/patch-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ListarUsersComponent,
    CrearComponent,
    PatchUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
