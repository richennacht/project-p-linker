import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Project P-Linker interface', () => {
  it('states the scientific limitation', () => {
    render(<App />)
    expect(screen.getByText(/makes no claim of biological function/i)).toBeInTheDocument()
  })

  it('shows the complete four-stage workflow', () => {
    render(<App />)
    expect(screen.getByText('Check inputs')).toBeInTheDocument()
    expect(screen.getByText('Predict and compare')).toBeInTheDocument()
  })
})

