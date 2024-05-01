import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Statistic } from "../../../domain/model/dashboard/statistic.model";
import { Environment } from "../../env/environment";
@Injectable({
    providedIn: 'root'
})
export class StatisticRepository {
    constructor(private http: HttpClient) { }

    getStatistic(): Observable<Statistic> {
        return this.http.get<Statistic>(`${Environment.API_URL}/api/statistic`);
    }
}
