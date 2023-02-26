if (!window.Promise) {
    window.Promise = Promise;
  }
  
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker
      .register('./sw.js')
    .then(function() {
      console.log('Service Worker is registered!');
    }).catch(function (error){
      console.log(error);
    })
  }