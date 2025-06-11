console.log("%cWARNING... ", "color: red;font-size: 50px;");
console.log("%cThis console is intended for developers, if someone told you to paste something here it is most likely a scam.", "color: grey;font-size: 30px;");
console.log("%cIf you ran something here, please contact a Chocolet developer now.", "color: grey;font-size: 30px;");

fetch('/config.json', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: null
      })
      .then(response => response.json())
      .then(response => {
        let pagename = window.location.pathname.replace("/", "")
        document.title = `${pagename.charAt(0).toUpperCase() + pagename.slice(1)} | ${response.name}`;
        document.getElementsByClassName("styles__blooketText___1pMBG-camelCase")[0].innerText = response.name
      })