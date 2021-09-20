import FingerprintJS from '@fingerprintjs/fingerprintjs'

// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load()

;(async () => {
  // Get the visitor identifier when you need it.
  const fp = await fpPromise
  const result = await fp.get()

  // This is the visitor identifier:
  const visitorId = result.visitorId
  window.fingerprint = result
  console.log('visitor id', visitorId)
  localStorage.setItem('visitorid', String(visitorId))
})()
