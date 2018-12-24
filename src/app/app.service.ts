import {Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Inject({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  public requestIsBackendHealthy(): any {
    return this.http.get('/health');
  }

  public sendRequestForFirstCaseScenario(): any {
    return this.http.get('api/firstCaseScenario', { responseType: 'text' });
  }

  public sendRequestForSecondCaseScenario(): any {
    return this.http.get('api/secondCaseScenario', { responseType: 'text' });
  }

  public sendRequestForThirdCaseScenario(): any {
    return this.http.get('api/thirdCaseScenario', { responseType: 'text' });
  }
}
