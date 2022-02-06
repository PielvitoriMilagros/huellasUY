import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentHomeComponent } from './components/content-home/content-home.component';

import {HttpClientModule} from '@angular/common/http';
import { DbService } from './services/db.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ColorHoverDirective } from './directivas/color-hover.directive';
import { ErrorComponent } from './pages/error/error.component';
import { AlbumComponent } from './components/album/album.component';
import { MascotasEncontradasComponent } from './pages/mascotas-encontradas/mascotas-encontradas.component';
import { MascotasPerdidasComponent } from './pages/mascotas-perdidas/mascotas-perdidas.component';

// import {AngularFireModule} from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ContentHomeComponent,
    ColorHoverDirective,
    ErrorComponent,
    AlbumComponent,
    MascotasEncontradasComponent,
    MascotasPerdidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
