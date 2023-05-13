let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
});

const installApp = async () => {
  if (deferredPrompt !== null) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      deferredPrompt = null;
    }
  }
}

const androidButton = document.getElementById('androidButton');
androidButton.addEventListener('click', installApp);

const chromeButton = document.getElementById('chromeButton');
chromeButton.addEventListener('click', installApp);