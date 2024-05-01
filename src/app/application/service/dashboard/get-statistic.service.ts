import { Injectable } from '@angular/core';
import { StatisticRepository } from '../../../infrastructure/repository/dashboard/Statistic.repository';
import { GetStatisticUseCase } from '../../usecase/dashboard/GetSattistic.usecase';
import { Statistic } from '../../../domain/model/dashboard/statistic.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetStatisticService implements GetStatisticUseCase {
  
  constructor(private statistic: StatisticRepository) { }
  getStatistic(): Promise<Statistic> {
      return new Promise<any>((resolve, reject) => {
          firstValueFrom(this.statistic.getStatistic()).then((statistic) => {
              resolve(statistic);
          }).catch((error) => {
              reject(error);
          });
      });
  }
}
