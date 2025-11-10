import React from 'react'
import ContactUs from '../components/ContactUs'
import PageHero from '../components/PageHero'

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHero 
      title={'Contact Nyahim Farm For More Information'} 
      image={'https://plus.unsplash.com/premium_photo-1742699562028-3e1957d62e60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHVuc3BsYXNoJTIwd2Vic2l0ZSUyMGZyb20lMjBmYXJtJTIwZW52aXJvbm1lbnQlMjB0cmFuc2FjdGlvbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600'}/>
      <ContactUs />
    </div>
  )
}

export default ContactPage