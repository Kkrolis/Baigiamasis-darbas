import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtClientService } from '../jwt-client.service';
import { ChatMessageDto } from '../models/chatMessageDto';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  userName: any = localStorage.getItem('userName');

  constructor(public webSocketService: WebSocketService, private service: JwtClientService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    // if segment is needed for cheking if userName exist in local storage 
    if (localStorage.getItem('userName') === null) {
      let res = this.service.welcome(localStorage.getItem('token'));
      res.subscribe(data => {
        this.userName = data;
        localStorage.setItem('userName', this.userName);
        const chatMessageDto: ChatMessageDto = new ChatMessageDto(this.userName, sendForm.value.message);
        this.webSocketService.sendMessage(chatMessageDto);
        sendForm.controls.message.reset();
      })
    } else {
      const chatMessageDto: ChatMessageDto = new ChatMessageDto(this.userName, sendForm.value.message);
      this.webSocketService.sendMessage(chatMessageDto);
      sendForm.controls.message.reset();
    }
  }
}
