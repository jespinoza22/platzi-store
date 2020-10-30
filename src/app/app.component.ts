import { Component, PLATFORM_ID, Inject, OnInit  } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SwUpdate } from '@angular/service-worker';
declare var gtag;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformID: Object,
    private swUpdate: SwUpdate
  ){
    if (isPlatformBrowser(this.platformID)){
      const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );

      navEndEvents$.subscribe((event: NavigationEnd) => {
        gtag('config', 'UA-166313333-1', {
          page_path: event.urlAfterRedirects
        });
      });
    }
  }

  ngOnInit() {
    this.updatePWA();
  }

  updatePWA() {
    this.swUpdate.available
    .subscribe(value => {
      console.log('update', value);
      window.location.reload();
    });
  }
}
