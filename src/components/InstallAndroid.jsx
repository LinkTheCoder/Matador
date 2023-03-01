import React, { useEffect, useState } from "react";

const InstallAndroid = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  
  return (
    <button
      className="link-button mt-6 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      Download
    </button>
  );
};

export default InstallAndroid;
