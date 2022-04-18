import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { GamePanelComponent } from './game-panel/game-panel.component';
import { GamePlayercomputerComponent } from './game-playercomputer/game-playercomputer.component';
import { ResultPanelComponent } from './result-panel/result-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    GamePanelComponent,
    GamePlayercomputerComponent,
    ResultPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
