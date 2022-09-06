import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Product } from '../models';
import { BehaviorSubject, catchError, Observable, take, tap } from 'rxjs';

@Injectable()
export class ProductsService {
  private productList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
  public productList$: Observable<Product[]> = this.productList.asObservable();

  constructor(
    private apiService: ApiService
  ) {
  }

  public getListProduct(): void {
    this.apiService.get('/pizza')
      .pipe(
        catchError(this.apiService.handleRequestError),
        tap(products => this.productList.next(products)),
        take(1)
      ).subscribe();
  }
}
