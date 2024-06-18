import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'team',
  standalone: true
})
export class TeamPipe implements PipeTransform {

  transform(team: any, operator: any): unknown {
    console.log(team, operator)
    return null;
  }

}
