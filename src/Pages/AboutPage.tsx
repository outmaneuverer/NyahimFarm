import React from 'react'
import AboutUs from '../components/AboutUs'
import PageHero from '../components/PageHero'

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHero
       title={'About Nyahim Farm'} 
       image={'https://images.unsplash.com/photo-1701934728219-de81ed736c7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHVuc3BsYXNoJTIwd2Vic2l0ZSUyMGZyb20lMjBmYXJtJTIwZW52aXJvbm1lbnRuZWFyJTIwYSUyMHJpdmVyJTIweWFsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600'}
       />
      <AboutUs />
    </div>
  )
}

export default AboutPage