import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityModule} from 'clarity-angular';
import {ForumsModule} from './forums/forums.module';

import {AppComponent} from './app.component';
import {ChatComponent} from './chat/chat.component';
import {ChatListComponent} from './chat-list/chat-list.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {UserService} from './services/user.service';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: ChatListComponent, outlet: 'chat'},
  {path: 'users/:username', component: ChatComponent, outlet: 'chat'},
  {path: '', redirectTo: '/forums', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatListComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    ForumsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
