import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from './products.service';

import { environment } from './../../../../environments/environment';

describe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getAllProducts', () => {
    it('should return products', () => {
      //arrange
      const expectData = [
        {
          id: '123',
          title: 'prueba001',
          price: 1500,
          description: 'ass',
          image: 'img/prueba.jpg',
        },
        {
          id: '222',
          title: 'prueba002',
          price: 1500,
          description: 'asseee',
          image: 'img/prueba2.jpg',
        },
      ];
      let dataError, dataResponse;
      //act
      service.getAllProducts().subscribe(
        (response) => {
          dataResponse = response;
        },
        (error) => {
          dataError = error;
        }
      );
      const req = httpTestingController.expectOne(environment.url_api);
      req.flush(expectData);
      //assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
