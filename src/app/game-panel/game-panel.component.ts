import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss']
})
export class GamePanelComponent implements OnInit {
  playerScore:any=[]
  ComputerMoveVal!:string
  PlayerMoveVal!:string
  computerScore:any=[]
  totalCount:any=0
  stopWatch:any
  timerInSeconds:number=0
  constructor() { }

  ngOnInit(): void {
    let togglevalue=document.getElementById('timerButton')
    togglevalue?.click()
  }

  onClickImage(event:any){
    let RandomNumber=Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    let moveArr=['rock','paper','scissor']
    let computerMove=moveArr[RandomNumber]
    this.Logics(event.alt,computerMove)
    this.ComputerMoveVal=computerMove
    this.PlayerMoveVal=event.alt
    let imagebind=document.getElementById('ComputerImageValueid')
    let rockImage=document.createElement('img')
    rockImage.setAttribute('src','https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png')
    rockImage.setAttribute('alt','rock')
    rockImage.setAttribute('height','70px')
    rockImage.setAttribute('width','70px')
    let paperImage=document.createElement('img')
    paperImage.setAttribute('src','https://res.cloudinary.com/itsellej/image/upload/v1533400143/rock-paper-scissors/paper.png')
    paperImage.setAttribute('alt','paper')
    paperImage.setAttribute('height','70px')
    paperImage.setAttribute('width','70px')
    let scissorImage=document.createElement('img')
    scissorImage.setAttribute('src','https://res.cloudinary.com/itsellej/image/upload/v1533400144/rock-paper-scissors/scissors.png')
    scissorImage.setAttribute('alt','scissor')
    scissorImage.setAttribute('height','70px')
    scissorImage.setAttribute('width','70px')
    if(computerMove==='rock'){
      imagebind?.appendChild(rockImage)
      setTimeout(()=>{
        imagebind?.removeChild(rockImage)
      },700)
    }else if(computerMove==='paper'){
      imagebind?.appendChild(paperImage)
      setTimeout(()=>{
        imagebind?.removeChild(paperImage)
      },700)
    }else if(computerMove==='scissor'){
      imagebind?.appendChild(scissorImage)
      setTimeout(()=>{
        imagebind?.removeChild(scissorImage)
      },700)
    }
  }

  Logics(playerMove:string,computerMove:string){
    if(playerMove&&computerMove!=''){
      this.totalCount++
    }
    if(playerMove==='rock'&& computerMove==='rock'){

    }
    else if(playerMove==='paper'&& computerMove==='paper'){
    }
    else if(playerMove==='scissor'&& computerMove==='scissor'){
    }
    else if(playerMove==='rock'&& computerMove==='scissor'){
      this.playerScore.push('playerWon')
    }
    else if(playerMove==='scissor'&& computerMove==='rock'){
      this.computerScore.push('computerWon')
    }
    else if(playerMove==='paper'&& computerMove==='rock'){
      this.playerScore.push('playerWon')
    }
    else if(playerMove==='rock'&& computerMove==='paper'){
      this.computerScore.push('computerWon')
    }
    else if(playerMove==='scissor'&& computerMove==='paper'){
      this.playerScore.push('playerWon')
    }
    else if(playerMove==='paper'&& computerMove==='scissor'){
      this.computerScore.push('computerWon')
    }
    else if(playerMove==='rock'&& computerMove==='paper'){
      this.computerScore.push('computerWon')
    }
    else if(playerMove==='paper'&& computerMove==='rock'){
      this.playerScore.push('playerWon')
    }
    console.log('playerScore ',this.playerScore);
    console.log('computerScore ',this.computerScore);
    console.log('total ',this.totalCount);

  }

  timer(timer:any){
    let closeButton=document.getElementById('closeButton')
    closeButton?.click()
    let userTimeinmilliseconds=timer.value*60000
    this.timerInSeconds=timer.value*60
    if(timer.value){
      this.stopWatch=setInterval(()=>{
        this.timerInSeconds--
        console.log(this.timerInSeconds);
      },1000)
    }

    setTimeout(()=>{
      this.timerInSeconds=0
      clearInterval(this.stopWatch)
      if(this.playerScore.length>this.computerScore.length){
        window.alert('Player has Won')
        this.computerScore=[]
        this.playerScore=[]
      }else if(this.playerScore.length===this.computerScore.length){
        window.alert('Draw')
        this.computerScore=[]
        this.playerScore=[]
      }else{
        window.alert('You loose')
        this.computerScore=[]
        this.playerScore=[]
      }
    },userTimeinmilliseconds)

  }
  playAgain(){
    clearInterval(this.stopWatch)
    this.computerScore=[]
    this.playerScore=[]
    let togglevalue=document.getElementById('timerButton')
    togglevalue?.click()
  }
}
