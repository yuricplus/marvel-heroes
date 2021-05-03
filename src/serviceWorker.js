export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    // eslint-disable-next-line func-names
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('/sw.js')
        // eslint-disable-next-line func-names
        .then(function () {})
        // eslint-disable-next-line func-names
        .catch(function () {})
    })
  }
}
