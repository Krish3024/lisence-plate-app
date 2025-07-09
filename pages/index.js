import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import UploadForm from '@/components/UploadForm'
import React from 'react'

const index = () => {
  return (
    <div>
      <HeroSection />
      <UploadForm />
      <ContactSection />
    </div>
  )
}

export default index