import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformationService } from '../services/information.service';

interface AccordItem {
  title: string,
  content: string
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private route: ActivatedRoute, private informationService: InformationService) { }

  items: AccordItem[] = [{ title: "", content: "" }];
  title?:string;
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (data) => {
        if (data.get("id")) {
          let id = Number(data.get("id"));
          this.informationService.SetInformation(id)
        }
      }
    })

    this.informationService.$displayContent.subscribe({
      next: (value) => {
        if (value) {
          
          this.title = value.name;
          this.items[0] = { title: "Basic Information", content: value.basicInformation }
          this.items[1] = { title: "Language", content: value.language }
          this.items[2] = { title: "Location", content: value.location }
          this.items[3] = { title: "Population", content: value.population }
          
        }
      }
    })

  }

}
