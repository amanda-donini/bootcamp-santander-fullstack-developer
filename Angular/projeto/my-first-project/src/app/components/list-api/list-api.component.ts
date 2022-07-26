import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/service/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  personagens: [];

  constructor(private listService: ListService) { }


  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listService.getList().subscribe(result => {
      this.personagens = result?.results;
      console.log(this.personagens)
    })
  }

}
