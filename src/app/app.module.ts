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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireModule} from '@angular/fire/compat';
// import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { CargarMascotasComponent } from './pages/cargar-mascotas/cargar-mascotas.component';
import { FormularioCargaComponent } from './components/formulario-carga/formulario-carga.component';

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
    MascotasPerdidasComponent,
    CargarMascotasComponent,
    FormularioCargaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // AngularFirestore,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
