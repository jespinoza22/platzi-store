import { Component, OnInit, OnDestroy } from '@angular/core';

import { GeneratorService } from './../../../core/services/generator.service';
import { EmployeeData } from './../../../core/models/employee.model';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Subscription } from 'rxjs';

const names = ['junior', 'smits', 'joel', 'jherson'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];

  value: number;
  sub$: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);
    this.sub$ = this.generatorService.getData()
    .subscribe(value => {
      this.value = value;
      console.log(this.value);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destroy');
    this.sub$.unsubscribe();
  }

  addItem(list: EmployeeData[], label: string){
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    });
  }
}
