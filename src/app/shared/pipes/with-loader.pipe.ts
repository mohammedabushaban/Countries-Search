import { Pipe, PipeTransform } from "@angular/core";
import { isObservable, observable, of, throwError } from "rxjs";
import { catchError, map, startWith, tap } from "rxjs/operators";

@Pipe({
  name: "withLoader",
})
export class WithLoaderPipe implements PipeTransform {
  transform(obs: any) {
    if (isObservable(obs)) {
      return obs.pipe(
        map((resp) => ({ isLoading: false, data: resp })),
        startWith({ isLoading: true }),
        catchError((err) => of({ isLoading: false, err }))
      );
    }
    return obs;
  }
}
