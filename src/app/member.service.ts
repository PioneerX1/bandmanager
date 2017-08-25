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

  getMemberById(id: string) {
    return this.database.object('/members/' + id);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(localUpdatedMember) {
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({
      name: localUpdatedMember.name
    });
  }

}
