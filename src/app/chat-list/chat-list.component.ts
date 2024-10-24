import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ForumsService } from '../forums/services/forums.service';
import {ChatBotService} from '../services/chat-bot.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  users: any[];
  talkTo: string;

  constructor(private forumsService: ForumsService) { }

  ngOnInit() {
    this.users = this.forumsService.users;
  }

  close() {}
}
