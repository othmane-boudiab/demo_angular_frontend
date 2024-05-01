import { Statistic } from "../../../domain/model/dashboard/statistic.model";

export interface GetStatisticUseCase {
    getStatistic(): Promise<Statistic>;
}