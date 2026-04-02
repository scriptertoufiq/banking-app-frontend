import { useRef, useState } from 'react'

const INITIAL_CODE = ['4', '8', '', '', '', '']

function MfaOtpInput() {
  const [code, setCode] = useState(INITIAL_CODE)
  const inputsRef = useRef([])

  const updateDigit = (index, rawValue) => {
    const value = rawValue.replace(/\D/g, '').slice(-1)
    const next = [...code]
    next[index] = value
    setCode(next)

    if (value && index < next.length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  return (
    <div className="mfa-otp" role="group" aria-label="6 digit verification code">
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(node) => {
            inputsRef.current[index] = node
          }}
          className="mfa-otp__cell"
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(event) => updateDigit(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          aria-label={`Verification code digit ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default MfaOtpInput
