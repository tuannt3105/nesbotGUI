export const appendCSS = (scriptToAppend) => {
    const script = document.createElement("link");
    script.rel  = 'stylesheet';
  script.type = 'text/css';
  script.href = scriptToAppend;
    //script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
}