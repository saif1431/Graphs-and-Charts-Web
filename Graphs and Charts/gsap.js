const tl = gsap.timeline();

tl.from('#chart1',{
  duration: 1,
  x: -400,
  ease: 'power1.inOut',
  opacity:0,
  stagger:0.3,
  delay: 0.2,
  scrollTrigger:{
    trigger: '#chart1',
    start: 'top center',
    end: 'bottom center',
    scrub: 2,
    toggleActions: "play pause resume reset"
  }

})
tl.from('#slide1-chart2',{
  duration: 1,
  x: 500,
  ease: 'power1.inOut',
  opacity:0,
  stagger:0.3,
  delay: 0.2,
  scrollTrigger:{
    trigger: '#slide1-chart2',
    start: 'top center',
    end: 'bottom center',
    scrub: 2,
    toggleActions: "play pause resume reset"
  }
})
tl.from('#slide1-chart03',{
  duration: 1,
  y: 400,
  ease: 'power1.inOut',
  opacity:0,
  stagger:0.3,
  delay: 0.2,
  scrollTrigger:{
    trigger: '#slide1-chart03',
    start: 'top center',
    end: 'bottom center',
    scrub: 2,
    toggleActions: "play pause resume reset"
  }
})
tl.from('#slide2-chart1',{
  duration: 1,
  x: -400,
  ease: 'power1.inOut',
  opacity:0,
  stagger:0.3,
  delay: 0.2,
  scrollTrigger:{
    trigger: '#slide2-chart1',
    start: 'top center',
    end: 'bottom center',
    scrub: 2,
    toggleActions: "play pause resume reset"
  }
})
tl.from('#slide2-chart2',{
  duration: 1,
  x: 500,
  ease: 'power1.inOut',
  opacity:0,
  stagger:0.3,
  delay: 0.2,
  scrollTrigger:{
    trigger: '#slide2-chart2',
    start: 'top center',
    end: 'bottom center',
    scrub: 2,
    toggleActions: "play pause resume reset"
  }
})
tl.from('#slide2-chart3',{
  duration: 1,
  x: -400,
  ease: 'power1.inOut',
  opacity:0,
  stagger:0.3,
  delay: 0.2,
  scrollTrigger:{
    trigger: '#slide2-chart3',
    start: 'top center',
    end: 'bottom center',
    scrub: 2,
    toggleActions: "play pause resume reset"
  }
})
tl.from('#slide2-chart4',{
  duration: 1,
  x: 500,
  ease: 'power1.inOut',
  opacity:0,
  stagger:0.3,
  delay: 0.2,
  scrollTrigger:{
    trigger: '#slide1-chart2',
    start: 'top center',
    end: 'bottom center',
    scrub: 2,
    toggleActions: "play pause resume reset"
  }
})