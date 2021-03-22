import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/chatMessageDto';

import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket: WebSocket;
  chatMessages: ChatMessageDto[] = [];

  apiUrl = GlobalConstants.webSocketUrl;

constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket(this.apiUrl + "/chat");

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
      };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);

    };
  }

  public sendMessage(chatMessageDto: ChatMessageDto) {
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }

}
