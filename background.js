chrome.runtime.onMessage.addListener( function(message,sender,sendResponse) {
    console.log("Message recu depuis le content script  : " ,message);
    let result = window [message.action] (message.data);
   
       sendResponse(result);   
       return true;
});