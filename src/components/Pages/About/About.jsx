import React from 'react'
import Business from './Business/Business'
import AboutCards from './AboutCards/AboutCards'
import CounterSection from './CounterSection/CounterSection'
import OurPurpose from './OurPurpose/OurPurpose'
import OurSupplier from './OurSupplier/ServiceProcesses'

const About = () => {
  return (
    <div>
      <Business></Business>
      <AboutCards></AboutCards>
      <CounterSection></CounterSection>
      <OurPurpose></OurPurpose>
      <OurSupplier></OurSupplier>
    </div>
  )
}

export default About