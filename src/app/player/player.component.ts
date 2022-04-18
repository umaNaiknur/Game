import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playerVsPlayer:boolean=false
  playerVsComputer:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  gameMenu(event:any){
    console.log(event.innerText);
    if(event.innerText==='Player VS Computer'){
      this.playerVsPlayer=true
      this.playerVsComputer=false
    }
    if(event.innerText==='Computer VS Computer'){
      this.playerVsComputer=true
      this.playerVsPlayer=false
    }
  }
}
