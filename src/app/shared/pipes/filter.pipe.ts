import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], searchText: string | null, key?: string): unknown {
    if (searchText) {
      let search = searchText.toLowerCase();
      return arr.filter((item) =>
        key
          ? item[key].toLowerCase().includes(search)
          : item.toLowerCase().includes(search)
      );
    }
    return arr;
  }
}
