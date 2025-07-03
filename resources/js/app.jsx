import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import React from 'react'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress: {
    delay: 250,
    // showSpinner: true,
    color: '#4B5563',
  },
})
