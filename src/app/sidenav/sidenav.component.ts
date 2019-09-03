import { Component, OnInit, ElementRef, ChangeDetectorRef, ViewChild, HostListener } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  title = 'Portfolio';

  navbarActive = false;
  hideButton;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  events: string[] = [];
  opened: boolean;
  desktop: boolean;


  constructor(private _eref: ElementRef, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    if (!this.mobileQuery.matches) {
      this.navbarActive = false;
      this.hideButton = true;
    } else {
      this.hideButton = false;
    }
  }

  ngOnInit(): void {

  }

}
