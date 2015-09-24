
var app = {
    // Application Constructor
    initialize: function() {
    	console.log("initialize");
    	
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    	alert(window.plugins);
    	alert(window.plugins.OnDestroy);
    	alert(window.plugins.OnDestroyPlugin);
    	
        window.plugins.OnDestroyPlugin.setEventListener(function (e, f, g, h) {
        	alert("callback");
        });
    }
};

app.initialize();
