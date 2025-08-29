import { useState } from 'react'

interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

interface UseContactFormReturn {
  formData: ContactFormData
  isSubmitting: boolean
  isSubmitted: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simular envío - aquí iría la llamada real a la API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        resetForm()
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      // Aquí podrías manejar errores
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    })
    setIsSubmitted(false)
  }

  return {
    formData,
    isSubmitting,
    isSubmitted,
    handleInputChange,
    handleSubmit,
    resetForm
  }
} 