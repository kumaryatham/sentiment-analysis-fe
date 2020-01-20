import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getAlert()
    .subscribe(message => {
      switch(message && message.type) {
        case 'success': 
          message.cssClass = 'alert alert-success';
          break;
        case 'error':
          message.cssClass = 'alert alert-danger';
          message.text = message.text.message;
          break;
      }
      this.message = message;
    });
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
