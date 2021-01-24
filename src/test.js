const loadScript = (source, beforeEl, async = true, defer = true) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    const prior = beforeEl || document.getElementsByTagName("script")[0];

    script.async = async;
    script.defer = defer;

    function onloadHander(_, isAbort) {
      if (
        isAbort ||
        !script.readyState ||
        /loaded|complete/.test(script.readyState)
      ) {
        script.onload = null;
        script.onreadystatechange = null;
        script = undefined;

        if (isAbort) {
          reject();
        } else {
          resolve();
        }
      }
    }

    script.onload = onloadHander;
    script.onreadystatechange = onloadHander;

    script.src = source;
    prior.parentNode.insertBefore(script, prior);
  });
};

(() => {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let param of vars) {
    const [varName, val] = param.split("=");
    if (varName == "fcc" && val === "true") {
      const scriptUrl =
        "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
      loadScript(scriptUrl).catch(() => {
        console.log("failed to load test script");
      });
    }
  }
})();
