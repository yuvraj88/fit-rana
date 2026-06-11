import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Roadmap from './components/Roadmap'
import MealPlan from './components/MealPlan'
import WaterSchedule from './components/WaterSchedule'
import JuneCalendar from './components/JuneCalendar'
import JulyCalendar from './components/JulyCalendar'
import AugustCalendar from './components/AugustCalendar'
import CoreRoutine from './components/CoreRoutine'
import DeskJobRules from './components/DeskJobRules'
import SaladRecipes from './components/SaladRecipes'
import MealRotation from './components/MealRotation'
import Drinks from './components/Drinks'
import Supplements from './components/Supplements'
import ProgressTracker from './components/ProgressTracker'
import GroceryList from './components/GroceryList'
import SleepRecovery from './components/SleepRecovery'
import Mindset from './components/Mindset'
import FAQ from './components/FAQ'
import Relaxation from './components/Relaxation'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.body.className = isDark ? '' : 'light'
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  // Scroll progress bar
  useEffect(() => {
    const progressBar = document.getElementById('scrollProgress')
    if (!progressBar) return
    const onScroll = () => {
      const h = document.documentElement
      progressBar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // GSAP + Three.js animations
  useEffect(() => {
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    const THREE = window.THREE
    if (!gsap || !ScrollTrigger) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)

    // Three.js hero particle field
    if (THREE) {
      const canvas = document.getElementById('heroParticles')
      const hero = document.querySelector('.hero')
      if (canvas && hero) {
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
        camera.position.z = 30

        const resize = () => {
          const w = hero.clientWidth, h = hero.clientHeight
          renderer.setSize(w, h, false)
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
          camera.aspect = w / h
          camera.updateProjectionMatrix()
        }
        resize()
        window.addEventListener('resize', resize)

        const COUNT = 220
        const positions = new Float32Array(COUNT * 3)
        const speeds = []
        for (let i = 0; i < COUNT; i++) {
          positions[i * 3]     = (Math.random() - 0.5) * 70
          positions[i * 3 + 1] = (Math.random() - 0.5) * 35
          positions[i * 3 + 2] = (Math.random() - 0.5) * 30
          speeds.push(0.01 + Math.random() * 0.04)
        }
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const mat = new THREE.PointsMaterial({ color: 0xe8ff47, size: 0.22, transparent: true, opacity: 0.65, sizeAttenuation: true })
        const points = new THREE.Points(geo, mat)
        scene.add(points)

        const wireMesh = new THREE.Mesh(
          new THREE.IcosahedronGeometry(9, 1),
          new THREE.MeshBasicMaterial({ color: 0xe8ff47, wireframe: true, transparent: true, opacity: 0.14 })
        )
        wireMesh.position.set(14, 0, -6)
        scene.add(wireMesh)

        const wire2 = new THREE.Mesh(
          new THREE.IcosahedronGeometry(4, 0),
          new THREE.MeshBasicMaterial({ color: 0xff6b35, wireframe: true, transparent: true, opacity: 0.18 })
        )
        wire2.position.set(-18, 4, -8)
        scene.add(wire2)

        const pos2 = new Float32Array(60 * 3)
        for (let i = 0; i < 60; i++) {
          pos2[i * 3]     = (Math.random() - 0.5) * 70
          pos2[i * 3 + 1] = (Math.random() - 0.5) * 35
          pos2[i * 3 + 2] = (Math.random() - 0.5) * 30
        }
        const geo2 = new THREE.BufferGeometry()
        geo2.setAttribute('position', new THREE.BufferAttribute(pos2, 3))
        scene.add(new THREE.Points(geo2, new THREE.PointsMaterial({ color: 0xff6b35, size: 0.3, transparent: true, opacity: 0.5 })))

        let mouseX = 0, mouseY = 0
        hero.addEventListener('mousemove', (e) => {
          const r = hero.getBoundingClientRect()
          mouseX = ((e.clientX - r.left) / r.width - 0.5) * 2
          mouseY = ((e.clientY - r.top) / r.height - 0.5) * 2
        })

        let frame = 0
        const animate = () => {
          frame += 0.002
          const p = geo.attributes.position.array
          for (let i = 0; i < COUNT; i++) {
            p[i * 3 + 1] += speeds[i]
            if (p[i * 3 + 1] > 18) p[i * 3 + 1] = -18
          }
          geo.attributes.position.needsUpdate = true
          points.rotation.y = frame * 0.4
          wireMesh.rotation.x = frame * 1.6
          wireMesh.rotation.y = frame * 2.1
          wire2.rotation.x = -frame * 2.4
          wire2.rotation.z = frame * 1.8
          camera.position.x += (mouseX * 3 - camera.position.x) * 0.04
          camera.position.y += (-mouseY * 2 - camera.position.y) * 0.04
          camera.lookAt(scene.position)
          renderer.render(scene, camera)
          requestAnimationFrame(animate)
        }
        animate()
      }
    }

    // Hero entrance
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.hero-tag', { y: 24, opacity: 0, duration: 0.7 })
      .from('.stat', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.3')

    // Animated stat counters
    document.querySelectorAll('.stat-val[data-count]').forEach((el) => {
      const target = parseFloat(el.dataset.count)
      const suffix = el.dataset.suffix || ''
      const decimal = el.dataset.decimal === 'true'
      const comma = el.dataset.comma === 'true'
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target, duration: 1.8, delay: 0.5, ease: 'power2.out',
        onUpdate: () => {
          let v = decimal ? obj.val.toFixed(1) : Math.round(obj.val)
          if (comma) v = Number(v).toLocaleString('en-IN')
          el.textContent = v + suffix
        },
      })
    })

    // Section title slide-in + line sweep
    document.querySelectorAll('.section-title').forEach((title) => {
      gsap.from(title, { x: -40, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: title, start: 'top 88%' } })
      const line = title.querySelector('.line')
      if (line) gsap.from(line, { scaleX: 0, duration: 1, ease: 'power3.inOut', scrollTrigger: { trigger: title, start: 'top 88%' } })
    })

    // Phase cards
    gsap.from('.phase', { y: 50, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'back.out(1.4)', scrollTrigger: { trigger: '.phases', start: 'top 85%' } })

    // Meal cards batch
    ScrollTrigger.batch('.meal-card', {
      start: 'top 92%',
      onEnter: (els) => gsap.fromTo(els, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out', overwrite: true }),
      once: true,
    })

    // Rule cards batch
    ScrollTrigger.batch('.rule-card', {
      start: 'top 92%',
      onEnter: (els) => gsap.fromTo(els, { y: 30, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out', overwrite: true }),
      once: true,
    })

    // Calendar cells wave pop
    document.querySelectorAll('.cal-grid').forEach((grid) => {
      gsap.from(grid.querySelectorAll('.cal-day:not(.empty)'), {
        scale: 0.6, opacity: 0, duration: 0.4, stagger: { each: 0.02, from: 'start' },
        ease: 'back.out(2)', scrollTrigger: { trigger: grid, start: 'top 85%' },
      })
    })

    // Water bars fill
    document.querySelectorAll('.water-bar').forEach((bar) => {
      const target = bar.style.width || '100%'
      gsap.fromTo(bar, { width: '0%' }, { width: target, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: bar, start: 'top 92%' } })
    })

    // Totals bar
    document.querySelectorAll('.totals-bar').forEach((bar) => {
      gsap.from(bar, { y: 30, opacity: 0, scale: 0.97, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: bar, start: 'top 90%' } })
    })

    // Exercise rows
    ScrollTrigger.batch('.exercise-row', {
      start: 'top 94%',
      onEnter: (els) => gsap.fromTo(els, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out', overwrite: true }),
      once: true,
    })

    // FAQ items
    ScrollTrigger.batch('details', {
      start: 'top 94%',
      onEnter: (els) => gsap.fromTo(els, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out', overwrite: true }),
      once: true,
    })

    // Progress table rows
    document.querySelectorAll('#progressTable tr').forEach((row, i) => {
      gsap.from(row, { x: -20, opacity: 0, duration: 0.4, delay: i * 0.03, ease: 'power2.out', scrollTrigger: { trigger: '#progressTable', start: 'top 88%' } })
    })

    // Hero parallax
    gsap.to('.hero-content', {
      y: 80, opacity: 0.3, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    })

    // 3D tilt on cards (non-touch only)
    if (!window.matchMedia('(hover: none)').matches) {
      document.querySelectorAll('.meal-card, .phase').forEach((card) => {
        let raf = null
        card.addEventListener('mousemove', (e) => {
          if (raf) return
          raf = requestAnimationFrame(() => {
            const r = card.getBoundingClientRect()
            const rx = ((e.clientY - r.top) / r.height - 0.5) * -10
            const ry = ((e.clientX - r.left) / r.width - 0.5) * 12
            card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`
            raf = null
          })
        })
        card.addEventListener('mouseleave', () => { card.style.transform = '' })
      })
    }

    window.addEventListener('load', () => ScrollTrigger.refresh())
  }, [])

  return (
    <>
      <div id="scrollProgress"></div>
      <div className="grain"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <section id="hero"><Hero /></section>
      <div className="marquee">
        <div className="marquee-track">
          <span>NO EXCUSES ✦</span><span>90 DAYS ✦</span><span>−6 KG ✦</span>
          <span>VISIBLE ABS ✦</span><span>132G PROTEIN ✦</span><span>3.8L WATER ✦</span>
          <span>SLEEP 8 HRS ✦</span><span>SHOW UP DAILY ✦</span>
          <span>NO EXCUSES ✦</span><span>90 DAYS ✦</span><span>−6 KG ✦</span>
          <span>VISIBLE ABS ✦</span><span>132G PROTEIN ✦</span><span>3.8L WATER ✦</span>
          <span>SLEEP 8 HRS ✦</span><span>SHOW UP DAILY ✦</span>
        </div>
      </div>
      <div className="container">
        <section id="roadmap"><Roadmap /></section>
        <section id="meals"><MealPlan /></section>
        <section id="water"><WaterSchedule /></section>
        <section id="calendar">
          <JuneCalendar />
          <JulyCalendar />
          <AugustCalendar />
        </section>
        <section id="core"><CoreRoutine /></section>
        <section id="rules"><DeskJobRules /></section>
        <section id="salads"><SaladRecipes /></section>
        <section id="rotation"><MealRotation /></section>
        <section id="drinks"><Drinks /></section>
        <section id="supplements"><Supplements /></section>
        <section id="tracker"><ProgressTracker /></section>
        <section id="grocery"><GroceryList /></section>
        <section id="sleep"><SleepRecovery /></section>
        <section id="mindset"><Mindset /></section>
        <section id="faq"><FAQ /></section>
        <section id="relaxation"><Relaxation /></section>
      </div>
      <Footer />
    </>
  )
}

export default App
