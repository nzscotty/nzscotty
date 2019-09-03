import { Component, OnInit, Output, EventEmitter, ElementRef, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //@Output() toggleNav = new EventEmitter();
  @Input()navbarActive;

  constructor(private _eref: ElementRef) { }

  ngOnInit() {
  }

  public toggleNav() {
    this.navbarActive = !this.navbarActive;
  }

  @HostListener('document:click', ['$event']) clickout(event) {
    if (!this._eref.nativeElement.contains(event.target) && this.navbarActive === true ) {
      this.navbarActive = false;
    }
  }

}
