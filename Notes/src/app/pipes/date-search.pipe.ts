import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSearch'
  // dataSearch:dataCreated to use pipe
})
export class DateSearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    //  return full value of all notes if search arguement is blank
     if(args[0]==''){
      return value;
    }
    // initalizing search result array to add values to return to user
    let searchResult = [];
  // loop through notes array to check if date matches the search input
    for(let i=0; i<value.length; i++){
      // loop through date values for each note object in the array
      for(let j=0; j<value[i].dataCreated.length; j++){
        // if date is included in the search inquiry, add it to the searchResult array to return to user
        if(value[i].dataCreated.includes(args)){
          searchResult.push(value[i]);
          break;
        }
      }
    }
  // return only the notes that match the search inqury
  return searchResult;
  }
}