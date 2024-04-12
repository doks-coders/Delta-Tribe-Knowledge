import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentItem } from '../models/display-content';
import data from '../data/location-data';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  displayInformationOberver = new BehaviorSubject<ContentItem| null>(null);
  $displayContent = this.displayInformationOberver.asObservable();
  constructor() { }

  getAllTribes(){
    return data.map(i=>({name:i.name,imageUrl:i.imageUrl}));;
  }

  SetInformation(id: number) {
    let info = data[id];
    this.displayInformationOberver.next(info);
  }
}
