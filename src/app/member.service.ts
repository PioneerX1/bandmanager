import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {

  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
    return this.members;
  }

  // getMembersWhoCanTravel() {
  //   var travelMembers: Member[] = [];
  //   for(var i = 0; i < this.members.length; i++)
  //
  //   this.members.forEach(member : this.members) {
  //     if(member.travel === true) {
  //       travelMembers.push(member);
  //     }
  //   }
  //   return travelMembers;
  // }

  getMemberById(id: string) {
    return this.database.object('/members/' + id);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(localUpdatedMember) {
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({
      name: localUpdatedMember.name,
      phone: localUpdatedMember.phone,
      email: localUpdatedMember.email,
      instrument: localUpdatedMember.instrument,
      skills: localUpdatedMember.skills,
      travel: localUpdatedMember.travel
    });
  }

  deleteMember(memberToDelete) {
    if(confirm("Are you sure you want to remove this member from the band?")) {
      this.members.remove(memberToDelete);
    }
  }

}
