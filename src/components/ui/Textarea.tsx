import React from 'react'

interface TextareaProps {
  id: string
  name: string
  label?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
  disabled?: boolean
  rows?: number
  error?: string
  className?: string
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  rows = 4,
  error,
  className = ''
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`
          w-full px-4 py-3 border rounded-lg transition-all duration-200 resize-none
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error 
            ? 'border-red-300 focus:ring-red-500' 
            : 'border-gray-300 focus:ring-primary-500'
          }
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default Textarea 