import { Component, OnInit } from '@angular/core';
import { GetStatisticUseCase } from '../../../../application/usecase/dashboard/GetSattistic.usecase';
import { Statistic } from '../../../../domain/model/dashboard/statistic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  statistic: Statistic;
  
  constructor(private getStatistic: GetStatisticUseCase) { }

  ngOnInit(): void {
    this.getStatistic.getStatistic().then((resolvedStatistic: Statistic) => {
      this.statistic = resolvedStatistic;
    });
  }
}
