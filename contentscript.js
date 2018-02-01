// TODO: make function adding script
const scripts = ["jszip.js", "filesaver.js", "script.js", "script2.js"];


const addScript = () => {
  const s = document.createElement('script');
  s.src = chrome.extension.getURL(scripts[0]);
  (document.head || document.documentElement).appendChild(s);
  s.onload = function() {
    s.parentNode.removeChild(s);
    scripts.shift();
    if (scripts.length > 0) {
      addScript();
    }
  };
}

addScript();