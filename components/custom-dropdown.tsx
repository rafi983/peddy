"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface CustomDropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "start" | "end"
}

export default function CustomDropdown({ trigger, children, align = "end" }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const alignmentClass = align === "start" ? "left-0" : "right-0"

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center rounded-md border border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {trigger}
          <ChevronDown className="-mr-1 ml-2 h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div
          className={`origin-top-right absolute ${alignmentClass} mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

interface CustomDropdownItemProps {
  onClick?: () => void
  children: React.ReactNode
}

export function CustomDropdownItem({ onClick, children }: CustomDropdownItemProps) {
  return (
    <button
      onClick={onClick}
      className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
      role="menuitem"
      tabIndex={-1}
    >
      {children}
    </button>
  )
}
