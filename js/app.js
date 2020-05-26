particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 850
        }
      },
      "color": {
        "value": "#6f8cf7"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.4,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 2,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 6,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 140,
        "color": "#999",
        "opacity": 0.7,
        "width": 0.8
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 620,
          "rotateY": 1220
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 250,
          "line_linked": {
            "opacity": 0.8
          }
        },
        "bubble": {
          "distance": 300,
          "size": 5,
          "duration": 1,
          "opacity": 5,
          "speed": 5
        },
        "repulse": {
          "distance": 300
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
  }
);
