import React, { useState } from 'react'

const NewsletterPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [preferences, setPreferences] = useState({
    aiUpdates: false,
    productNews: false,
    events: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleCheckbox = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter your email address.')
      return
    }
    if (!preferences.aiUpdates && !preferences.productNews && !preferences.events) {
      setError('Please select at least one topic.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
        <div style={{ minHeight: '100vh', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <div className="text-center">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #E8B4B8, #B8D4E8)' }}
          >
            <span className="text-2xl">✓</span>
          </div>
          <h1 className="text-3xl font-light text-white mb-4">
            You're subscribed!
          </h1>
          <p className="text-gray-400 text-lg">
            Thanks for joining. We'll keep you updated on everything hushh.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem' }}>
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="w-12 h-12 rounded-full mx-auto mb-6"
            style={{ background: 'linear-gradient(135deg, #E8B4B8, #B8D4E8)' }}
          />
          <h1 className="text-4xl font-light text-white mb-4">
            Stay in the loop
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Get the latest hushh updates delivered directly to your inbox.
            No spam, ever.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email input */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-4 rounded-xl text-white placeholder-gray-600 text-base focus:outline-none focus:ring-1 focus:ring-gray-500"
              style={{ background: '#1a1a1a', border: '1px solid #333' }}
            />
          </div>

          {/* Preferences */}
          <div>
            <label className="block text-sm text-gray-400 mb-4">
              Topics you care about
            </label>
            <div className="space-y-3">
              {(
                [
                  { key: 'aiUpdates', label: 'AI updates', desc: 'Latest in hushh AI technology' },
                  { key: 'productNews', label: 'Product news', desc: 'New features and releases' },
                  { key: 'events', label: 'Events & webinars', desc: 'Join us online and in person' },
                ] as { key: keyof typeof preferences; label: string; desc: string }[]
              ).map(({ key, label, desc }) => (
                <label
                  key={key}
                  className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200"
                  style={{
                    background: preferences[key] ? '#1f1f1f' : '#111',
                    border: preferences[key] ? '1px solid #555' : '1px solid #222',
                  }}
                >
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                    style={{
                      background: preferences[key]
                        ? 'linear-gradient(135deg, #E8B4B8, #B8D4E8)'
                        : '#222',
                      border: preferences[key] ? 'none' : '1px solid #444',
                    }}
                  >
                    {preferences[key] && (
                      <span className="text-black text-xs font-bold">✓</span>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences[key]}
                    onChange={() => handleCheckbox(key)}
                    className="hidden"
                  />
                  <div>
                    <div className="text-white text-sm font-medium">{label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl text-black font-medium text-base transition-opacity duration-200 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #E8B4B8, #B8D4E8)' }}
          >
            Subscribe to hushh
          </button>

          <p className="text-center text-gray-600 text-xs">
            By subscribing you agree to our{' '}
            <a href="/privacy-policy" className="text-gray-400 underline">
              Privacy Policy
            </a>
          </p>

        </form>
      </div>
    </div>
  )
}

export default NewsletterPage