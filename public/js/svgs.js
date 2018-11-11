let tl = new TimelineMax()
let tb = new TimelineMax()
let tt = new TimelineMax()
let tc = new TimelineMax()

let counter = 0
let counter2 = 0
let counter3 = 0

const convIds = [
  '#redbub',
  '#redtxt',
  '#grbub',
  '#redsomb',
  '#grtxt'
]



let redbub = document.querySelector('#redbub')
let redtxt = document.querySelector('#redtxt')
let grbub = document.querySelector('#grbub')
let redsomb = document.querySelector('#redsomb')
let grtxt = document.querySelector('#grtxt')
let anclador = document.querySelector('#anclador')
let cohete = document.querySelector('#basecohete')

//tabla
const marco = document.querySelector('#marco')
const papel = document.querySelector('#papel')
const clipa = document.querySelector('#clipa')
const clipb = document.querySelector('#clipb')
const txt1 = document.querySelector('#txt1')
const txt2 = document.querySelector('#txt2')
const txt3 = document.querySelector('#txt3')
const circa1 = document.querySelector('#circa1')
const circa2 = document.querySelector('#circa2')
const circa3 = document.querySelector('#circa3')
const visbu1 = document.querySelector('#visbu1')
const visbu2 = document.querySelector('#visbu2')
const visbu3 = document.querySelector('#visbu3')

//despegue
let llama = document.querySelector('#llama')
let estela = document.querySelector('#estela')
let nuvbaj = document.querySelector('#nuvbaj')
let nuval = document.querySelector('#nuval')

let isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}


const despegue = () => {

  llama.style.visibility = 'visible'
  estela.style.visibility = 'visible'
  nuvbaj.style.visibility = 'visible'
  nuval.style.visibility = 'visible'

  tc.from('#llama', 0.5, {
    scaleY: 0,
    scaleX: 0,
    transformOrigin: 'rigth',
    ease: Power2.easeOut
  })
  .from('#estela', 0.3, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: 'rigth',
    ease: Power2.easeOut
  })
  .from('#nuvbaj', 1, {
    scaleY: 0,
    transformOrigin: 'bottom',
    ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
  })
  .from('#nuval', 0.2, {
    scaleY:0,
    transformOrigin: 'bottom',
    ease: Power3.easeOut
  })
}


const tabla = function() {


  marco.style.visibility = 'visible'
  papel.style.visibility = 'visible'
  clipa.style.visibility = 'visible'
  clipb.style.visibility = 'visible'
  txt1.style.visibility = 'visible'
  txt2.style.visibility = 'visible'
  txt3.style.visibility = 'visible'
  circa1.style.visibility = 'visible'
  circa2.style.visibility = 'visible'
  circa3.style.visibility = 'visible'
  visbu1.style.visibility = 'visible'
  visbu2.style.visibility = 'visible'
  visbu3.style.visibility = 'visible'




  tt.from('#marco, #papel, #clipa, #clipb, #txt1, #txt2, #txt3, #circa1, #circa2, #circa3', 0.4, {
    scaleY: 0,
    transformOrigin: 'bottom',
    ease: Bounce.easeOut
  })
  .from('#visbu1', 0.2, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: 'left',
    ease: Power0.easeOut
  })
  .from('#visbu2', 0.2, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: 'left',
    ease: Power0.easeOut
  })
  .from('#visbu3', 0.2, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: 'left',
    ease: Power0.easeOut
  })
}

const conv = function() {

  redbub.style.visibility = 'visible'
  redtxt.style.visibility = 'visible'
  redsomb.style.visibility = 'visible'
  grbub.style.visibility = 'visible'
  grtxt.style.visibility = 'visible'


  tb.from('#redbub', 0.6, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: 'left',
    ease: Expo.easeOut
  })
  .from('#redtxt', 0.3, {
    scaleY: 0,
    transformOrigin: 'top',
    ease: Expo.easeOut
  })
  .from('#grbub, #redsomb', 0.5, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: 'right',
    ease: Expo.easeOut
  })
  .from('#grtxt', 0.3, {
    scaleY: 0,
    transformOrigin: 'top',
    ease: Expo.easeOut
  })
}

window.addEventListener('scroll', function(event) {
  if(isInViewport(redbub)) {
    counter++
    if (counter > 1) {
      console.log('ya se activo')
    } else {
      conv()
    }
  }

  if(isInViewport(anclador)) {
    counter2++
    if (counter2 > 1) {
      console.log('tb se activo')
    } else {
      tabla()
    }
  }

  if(isInViewport(cohete)) {
    counter3++
    if (counter3 > 1) {
      console.log('Cohete ya despegó')
    } else {
      despegue()
    }
  }

}, false)




tl.from('#circle', 0.3, {
  scaleY: 0,
  scaleX: 0,
  transformOrigin: 'center',
  ease: Power2.easeOut
})
.from('#celfondo', 0.2, {
  scaleY: 0,
  transformOrigin: 'bottom',
  ease: Power2.easeOut
})
.from('#tabfondo', 0.2, {
  scaleY: 0,
  transformOrigin: 'bottom',
  ease: Power2.easeOut
})
.from('#compufondo', 0.2, {
  scaleY: 0,
  transformOrigin: 'bottom',
  ease: Power2.easeOut
})
.from('#base', 0.3, {
  scaleY: 0,
  transformOrigin: 'bottom',
  ease: Bounce.easeOut
})
.from('#muesca', 0.1, {
  scaleY: 0,
  transformOrigin: 'bottom',
  ease: Power2.easeOut
})
.from('#sombra', 0.1, {
  scaleY: 0,
  transformOrigin: 'top',
  ease: Power2.easeOut
})
.from('#compu', 0.3, {
  scaleY: 0,
  transformOrigin: 'bottom',
  ease: Power2.easeOut
})
.from('#tablet', 0.2, {
  scaleY: 0,
  transformOrigin: 'bottom',
  ease: Power2.easeOut
})
.from('#tabcircle', 0.2, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power0.easeOut
})
.from('#tabbar', 0.2, {
  scaleX: 0,
  transformOrigin: 'center',
  ease: Power3.easeOut
})
.from('#cel', 0.2, {
  scaleY: 0,
  transformOrigin: 'bottom',
  ease: Power2.easeOut
})
.from('#celcircle', 0.2, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power0.easeOut
})
.from('#celbar', 0.2, {
  scaleX: 0,
  transformOrigin: 'center',
  ease: Power3.easeOut
})
.from('#barracompu', 0.3,{
  scaleY: 0,
  transformOrigin: 'top',
  ease: Power3.easeOut
})
.from('#scone', 0.1, {
  scaleX: 0,
  transformOrigin: 'left',
  ease: Power2.easeOut
})
.from('#sctwo', 0.1, {
  scaleX: 0,
  transformOrigin: 'left',
  ease: Power2.easeOut
})
.from('#scthree', 0.1, {
  scaleX: 0,
  transformOrigin: 'left',
  ease: Power2.easeOut
})
.from('#compuwb', 0.3, {
  scaleX: 0,
  transformOrigin: 'right',
  ease: Power2.easeOut
})
.from('#compublock', 0.2, {
  scaleX: 0,
  transformOrigin: 'center',
  ease: Power2.easeOut
})
.from('#compurojo', 0.2, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power0.easeOut
})
.from('#compuverde', 0.2, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power0.easeOut
})
.from('#compurillo', 0.2, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power0.easeOut
})
.from('#crtext', 0.1, {
  scaleY: 0,
  transformOrigin: 'top',
  ease: Power0.easeOut
})
.from('#cvtext', 0.1, {
  scaleY: 0,
  transformOrigin: 'top',
  ease: Power0.easeOut
})
.from('#catext', 0.1, {
  scaleY: 0,
  transformOrigin: 'top',
  ease: Power0.easeOut
})
.from('#tabgbar', 0.3, {
  scaleY: 0,
  transformOrigin: 'top',
  ease: Power2.easeOut
})
.from('#tabwbar', 0.2, {
  scaleX: 0,
  transformOrigin: 'center',
  ease: Power2.easeOut
})
.from('#tabsc1', 0.1, {
  scaleX: 0,
  transformOrigin: 'left',
  ease: Power2.easeOut
})
.from('#tabsc2', 0.1, {
  scaleX: 0,
  transformOrigin: 'left',
  ease: Power2.easeOut
})
.from('#tabsc3', 0.1, {
  scaleX: 0,
  transformOrigin: 'left',
  ease: Power2.easeOut
})
.from('#tablo', 0.1, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power2.easeOut
})
.from('#tabrc', 0.1, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power0.easeOut
})
.from('#tabbc', 0.2, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power0.easeOut
})
.from('#tabrct', 0.1, {
  scaleY: 0,
  transformOrigin: 'top',
  ease: Power0.easeOut
})
.from('#tabbct', 0.1, {
  scaleY: 0,
  transformOrigin: 'top',
  ease: Power0.easeOut
})
.from('#celgb', 0.1, {
  scaleY: 0,
  transformOrigin: 'top',
  ease: Power3.easeOut
})
.from('#celcircle1', 0.1, {
  scaleX: 0,
  transformOrigin: 'left',
  ease: Power2.easeOut
})
.from('#celcircle2', 0.1, {
  scaleX: 0,
  transformOrigin: 'left',
  ease: Power2.easeOut
})
.from('#celcircle3', 0.1, {
  scaleX: 0,
  transformOrigin: 'left',
  ease: Power2.easeOut
})
.from('#celwb', 0.1, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power3.easeOut
})
.from('#celcontent', 0.1, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power3.easeOut
})
.from('#celyc', 0.1, {
  scaleX: 0,
  scaleY: 0,
  transformOrigin: 'center',
  ease: Power3.easeOut
})
.from('#celtext', 0.1, {
  scaleY: 0,
  transformOrigin: 'bottom',
  ease: Power3.easeOut
})