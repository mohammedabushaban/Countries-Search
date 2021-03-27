import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filter-textbox",
  templateUrl: "./filter-textbox.component.html",
  styleUrls: ["./filter-textbox.component.css"],
})
export class FilterTextboxComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();

  searchInput: { filter: string };

  constructor() {}

  ngOnInit(): void {}

  filterChanged(event: any) {
    event.preventDefault();
    //Get the searchText from the event
    let value = event.target.value;
    this.onSearch.emit(value);
  }
}
