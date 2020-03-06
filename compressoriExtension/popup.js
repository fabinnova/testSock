let changeColor = document.getElementById('changeColor');
let stop = document.getElementById('stop'); 

changeColor.onclick = function(element) {
    chrome.tabs.query(
      {active: true, currentWindow: true}, 
      function(tabs) {
        executeScripts(tabs[0].id, [
          {file: 'axios.min.js'},
          {file: 'socket.io.js'},
          {file: 'startData.js'}
        ]);
    })};



function executeScripts(tabId, injectDetailsArray)
{
    function createCallback(tabId, injectDetails, innerCallback) {
        return function () {
            chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
        };
    }

    var callback = null;

    for (var i = injectDetailsArray.length - 1; i >= 0; --i)
        callback = createCallback(tabId, injectDetailsArray[i], callback);

    if (callback !== null)
        callback();   // execute outermost function
}