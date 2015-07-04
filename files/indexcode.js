(function() {
    var script = document.getElementsByTagName("script"),
        version = script[script.length - 1].getAttribute("v"),
        req = new XMLHttpRequest();
 
    Object.freeze(String.prototype);
    Object.freeze(String);
    Object.freeze(XMLHttpRequest.prototype);
    Object.freeze(XMLHttpRequest);
    Object.freeze(Math);
    Object.freeze(Object);
    Object.freeze(JSON);
    Object.freeze(WebSocket.prototype);
    Object.freeze(WebSocket);
    Object.freeze(Function.prototype);
    Object.freeze(Function);
    Object.freeze(window.eval);


    function valid(req, b) {
        var headers = req.getAllResponseHeaders();
        if (b || (headers && headers.indexOf("igin: *") != -1)) {
            location.href = "/anticheat";
            return false
        };
        return true
    }
    req.onreadystatechange = function() {
        if (req.readyState == 2) {
            valid(req)
        } else {
            if (req.readyState == 4 && req.status == 0 && req.responseText.length == 0) {
                valid(req, 1)
            } else {
                if (req.readyState == 4 && req.status == 200 && valid(req)) {
                    _xcl = req.responseText.length;
                    window.eval.call(window, JSON.parse(req.responseText))
                }
            }
        }
    };
    req.open("GET", "/static/js/1023957.js?" + version, true);
    req.send();
    if (script && script.parentNode) {
        script.parentNode.removeChild(script)
    }
})();
