import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';
import { ModulosComponent } from './modulos/modulos.component';
import { LoginComponent } from './login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { StyleClassModule } from 'primeng/styleclass';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { MultiSelectModule } from 'primeng/multiselect';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModulosComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    FormsModule,
    InputTextareaModule,
    RippleModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    DialogModule,
    ScrollTopModule,
    TooltipModule,
    GalleriaModule,
    MenuModule,
    BadgeModule,
    DividerModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    ButtonModule,
    StyleClassModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TabViewModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    BadgeModule,
    RippleModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    StyleClassModule,
    AnimateOnScrollModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
