src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1/bundled/lenis.min.js"
    
    const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)