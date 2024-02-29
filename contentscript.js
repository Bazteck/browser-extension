//alert("Extension code in " + location.href);
Array.from(document.getElementsByTagName("input")).map(input => {
    //console.log(input)
    input.addEventListener("change", evt => {
        console.log(input.name, input.value);
    })
})

addEventListener("message", event => {
    let message = event.data;
    // window [message.action] (message.data);
    chrome.runtime.sendMessage(event.data);
    
});


chrome.runtime.onMessage.addListener(function(message,sender,sendResponse) {
console.log("Message recu depuis le background  : " ,message);
postMessage(message);
return true;
});