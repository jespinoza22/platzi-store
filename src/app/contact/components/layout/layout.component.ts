import { Component, OnInit } from '@angular/core';

import { GeneratorService } from './../../../core/services/generator.service';
import { EmployeeData } from './../../../core/models/employee.model';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

const names = ['junior', 'smits', 'joel', 'jherson'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);
  }

  addItem(list: EmployeeData[], label: string){
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    });
  }
}
