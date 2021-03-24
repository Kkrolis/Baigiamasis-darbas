export class ChatMessageDto {
  user: string;
  message: string;
  destination: string;

  constructor(user: string, message: string, destination: string){
    this.user = user;
    this.message = message;
    this.destination = destination
  }

}
