import { Component, OnInit } from '@angular/core';
import { ForumsService } from '../services/forums.service';
import { Forum } from '../services/data';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  forums: Forum[];

  constructor(private forumsService: ForumsService) {}

  ngOnInit() {
    this.forums = this.forumsService.forums;
  }
}
