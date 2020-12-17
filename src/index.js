if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("service worker registered");
        console.log(registration);
    }).catch(error => {
        console.log("registration failed");
        console.log(error);
    });
}