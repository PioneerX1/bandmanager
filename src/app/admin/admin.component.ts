import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitNewMemberForm(name: string, phone: string, email: string, instrument: string, skills: string, travel: boolean) {
    var newMember: Member = new Member(name, phone, email, instrument, skills, travel);
    this.memberService.addMember(newMember);
  }

}
