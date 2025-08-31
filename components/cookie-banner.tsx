"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem("cookieConsent")
    if (!cookieChoice) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Content */}
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-2">Utilizamos Cookies</h3>
          <p className="text-sm text-gray-700">
            Este site utiliza cookies para melhorar a sua experiência de navegação e fornecer funcionalidades
            personalizadas. Ao continuar a utilizar o nosso site, concorda com a utilização de cookies de acordo com a
            nossa política de privacidade.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-shrink-0">
          <Button
            variant="outline"
            onClick={handleReject}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
          >
            Recusar
          </Button>
          <Button onClick={handleAccept} className="bg-green-600 hover:bg-green-700 text-white">
            Aceitar Cookies
          </Button>
        </div>
      </div>
    </div>
  )
}
