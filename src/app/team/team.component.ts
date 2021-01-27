import { Component, OnInit } from '@angular/core';
import {MEMBERS} from '../members';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  members = MEMBERS;

  constructor() { }

  ngOnInit(): void {
  }

}
