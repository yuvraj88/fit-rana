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

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <section id="hero"><Hero /></section>
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
