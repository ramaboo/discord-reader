console.debug("Loaded: content.js");

let observer = new MutationObserver(mutations => {
  for(let mutation of mutations) {
    for(let addedNode of mutation.addedNodes) {
      if (addedNode.className == "messageListItem-ZZ7v6g") {
        console.log("Node matches: Send data.");
        let data = { html: addedNode.innerHTML, id: addedNode.id }

        fetch("http://localhost:5050/api/alerts/discord", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then(response => {
          console.log("Got response:", response.json());
        });
      }
    }
  }
});

observer.observe(document, { childList: true, subtree: true });
