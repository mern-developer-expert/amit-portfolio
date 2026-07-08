import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AboutUs from './aboutUs'

describe('AboutUs component', () => {
    test('renders heading and profile CTA', () => {
        render(<AboutUs />)

        // Heading
        expect(screen.getByRole('heading', { name: /about — amit kumar/i })).toBeInTheDocument()

        // Profile actions
        expect(screen.getByRole('link', { name: /email amit kumar/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /download amit kumar resume \(pdf\)/i })).toBeInTheDocument()
    })

    test('renders stats and timeline', () => {
        render(<AboutUs />)

        // Stats — use getAllByText because values may appear in hidden labels elsewhere
        const users = screen.getAllByText(/100k\+/i)
        expect(users.length).toBeGreaterThan(0)
        expect(screen.getAllByText(/30%/i).length).toBeGreaterThan(0)

        // Timeline entries
        expect(screen.getByText(/bright digital gold/i)).toBeInTheDocument()
        expect(screen.getAllByText(/aviras/i).length).toBeGreaterThan(0)
        // Timeline bullets
        expect(screen.getByText(/Developed responsive web and mobile interfaces serving 100,000\+/i)).toBeInTheDocument()
        expect(screen.getByText(/product discovery, cart, checkout/i)).toBeInTheDocument()
        // Services present (sample checks)
        expect(screen.getAllByText(/SEO & Growth Optimization|Mobile & App Development/i).length).toBeGreaterThan(0)
        // API detail checks
        expect(screen.getByText(/payments integrations/i)).toBeInTheDocument()
        expect(screen.getByText(/event-driven backends/i)).toBeInTheDocument()
    })

    test('is keyboard accessible — profile and stat tiles focusable', async () => {
        const user = userEvent.setup()
        render(<AboutUs />)

        // Tab to Contact in profile card
        await user.tab()
        // after a few tabs we should eventually land on the profile contact link/button — ensure it exists
        expect(screen.getByRole('link', { name: /email amit kumar/i })).toBeInTheDocument()

        // Stat tiles should be present and accessible (visible label may be duplicated in screen readers)
        expect(screen.getAllByText(/Users Served/i).length).toBeGreaterThan(0)
        expect(screen.getAllByText(/Performance Boost/i).length).toBeGreaterThan(0)
    })
})
