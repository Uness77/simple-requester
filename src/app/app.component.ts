import {Component} from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-requester';
  isCurrentlyRequesting: boolean = false;
  requestLogs: string[] = [];

  constructor(private appService: AppService) {
  }

  private executeFirstCaseScenario(): any {
    this.preRequestInitializer('Sending Request for First case ...');
    let t0 = performance.now();
    this.appService.sendRequestForFirstCaseScenario().subscribe((result) => {
        let t1 = performance.now();
        this.PushResultLogsAndDisableLoading(result, t0, t1, "Calling api/firstCaseScenario took ");
      },
      (error) => {
        this.pushErrorLogsAndDisableLoading(error);
        console.error('FIRST Case Scenario Execution ERROR');
      });
  }

  private executeSecondCaseScenario(): any {
    this.preRequestInitializer('Sending Request for SECOND case ...');
    let t0 = performance.now();
    this.appService.sendRequestForSecondCaseScenario().subscribe((result) => {
        let t1 = performance.now();
        this.PushResultLogsAndDisableLoading(result, t0, t1, "Calling api/secondCaseScenario took ");
      },
      (error) => {
        this.pushErrorLogsAndDisableLoading(error);
        console.error('SECOND Case Scenario Execution ERROR');
      });
  }



  private executeThirdCaseScenario(): any {
    this.preRequestInitializer('Sending Request for THIRD case ...');
    let t0 = performance.now();
    this.appService.sendRequestForThirdCaseScenario().subscribe((result) => {
        let t1 = performance.now();
        this.PushResultLogsAndDisableLoading(result, t0, t1, "Calling api/thirdCaseScenario took ");
      },
      (error) => {
        this.pushErrorLogsAndDisableLoading(error);
        console.error('THIRD Case Scenario Execution ERROR');
      });
  }

  private clearRequestLogs(){
    this.requestLogs = [];
  }

  private preRequestInitializer(argument: string) {
    this.requestLogs = [];
    this.requestLogs.push(argument);
    this.isCurrentlyRequesting = true;
  }


  private PushResultLogsAndDisableLoading(result: any, t0: any, t1: any, argument: string){
    this.requestLogs.push('Request succeeded !');
    this.requestLogs.push(argument + (t1 - t0) + " milliseconds.");
    this.requestLogs.push('Response received : ');
    this.requestLogs.push(result);
    this.isCurrentlyRequesting = false;
  }

  private pushErrorLogsAndDisableLoading(error: any) {
    this.requestLogs.push('Request failed !');
    this.requestLogs.push('Error received : ');
    this.requestLogs.push(JSON.stringify(error));
    this.isCurrentlyRequesting = false;
  }


}
