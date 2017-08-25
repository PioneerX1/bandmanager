import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: "travel",
  pure: false
})

export class TravelPipe implements PipeTransform {
  transform(input: Member[], desiredChoice) {
    var output: Member[] = [];

    if(desiredChoice === "allMembers") {
      return input;
    } else {
      for(var i = 0; i < input.length; i++) {
        if(input[i].travel === true) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
