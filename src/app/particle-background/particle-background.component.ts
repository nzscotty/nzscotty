import { Component, OnInit } from '@angular/core';

import { particlesConf } from '../models/particles-config';

@Component({
  selector: 'app-particle-background',
  templateUrl: './particle-background.component.html',
  styleUrls: ['./particle-background.component.scss']
})
export class ParticleBackgroundComponent implements OnInit {

  constructor() { }

  myStyle: object = {};
  myParams: object = {};

  ngOnInit() {
    this.myStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    // this.myParams = particlesConf;

    this.myParams = {
      particles: {
        number: {
          value: 200
        },
        color: {
          value: "#ff0000"
        },
        shape: {
          type: "triangle"
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
          grab: {
              distance: 200,
              line_linked: {
                  opacity: 1
              }
          }
      }
    },
    retina_detect: true
    };
  }

}
