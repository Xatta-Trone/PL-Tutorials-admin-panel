// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js')

// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: '0d804a37eb14ea67a5ce',
//   cluster: 'ap1',
//   forceTLS: true,
// })

export default function ({ $echo }) {
  // Echo is available here
  console.log('ech=========', $echo)
}
