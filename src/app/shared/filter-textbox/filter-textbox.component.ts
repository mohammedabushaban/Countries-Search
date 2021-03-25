import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {

  searchInput : { filter: string };

  constructor() { }

  ngOnInit(): void {
  }

  filterChanged(event: any) {
    event.preventDefault();
    }

}
