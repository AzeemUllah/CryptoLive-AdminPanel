//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

//Enviourment component
import {environment} from "../environments/environment";

//AngularFire2 to connect to Firebase
import {AngularFireModule} from "angularfire2";
import {AngularFireStorageModule} from "angularfire2/storage";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFirestoreModule} from "angularfire2/firestore";

//My compoments
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//My Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { CoinsComponent } from './dashboard/coins/coins.component';
import { IcoComponent } from './dashboard/ico/ico.component';



@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'coins', pathMatch: 'full' },
          { path: 'coins', component: CoinsComponent },
          { path: 'ico', component: IcoComponent }
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
