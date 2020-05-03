import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kaw-fullscreen-image-viewer',
  templateUrl: './fullscreen-image-viewer.component.html',
  styleUrls: ['./fullscreen-image-viewer.component.scss']
})
export class FullscreenImageViewerComponent implements OnInit {

  @Input() mapUrl: string;
  screenHeight: string;
  screenWidth: string;
  @Output() isFullscreen = new EventEmitter<boolean>();

  imageViewerConfig = {
    btnClass: 'fullscreen-image-viewer__button',
    containerBackgroundColor: '#000000',
    btnShow: {
      zoomIn: true,
      zoomOut: true,
      rotateClockwise: false,
      rotateCounterClockwise: false,
      next: false,
      prev: false
    },
    btnIcons: {
      zoomIn: 'fullscreen-image-viewer__button--zoom-in',
      zoomOut: 'fullscreen-image-viewer__button--zoom-out'
    }
  }

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = String(window.innerHeight);
    this.screenWidth = String(window.innerWidth);
  }

  closeFullscreen() {
    this.isFullscreen.emit(false);
  }
}
