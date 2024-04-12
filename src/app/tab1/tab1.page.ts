import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from '../services/information.service';
interface DisplayTribe {
  name:string,
  imageUrl:string
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  availableTribes: DisplayTribe[] = []
  checkBox: boolean = false;
  constructor(private router: Router,private informationService:InformationService) { }
  ngOnInit(): void {
    this.availableTribes = this.informationService.getAllTribes()   
  }

  LogInformation() {
    console.log("Information");
    console.log(this.checkBox)
    this.router.navigateByUrl("/tabs/tab3/tab4")
  }

  selectTribe(index:number){
    this.router.navigateByUrl(`/tabs/tab1/information/${index}`)
  }

}
