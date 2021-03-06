import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { Member } from '../member.model';
import { MemberService } from '../member.service';

import { TravelPipe } from '../travel.pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})

export class HomeComponent implements OnInit {

  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  filterByTravel: string = "allMembers";
  onChange(optionFromMenu) {
    this.filterByTravel = optionFromMenu;
  }

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailsPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

}
