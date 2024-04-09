if("ServiceWorker" in navigator){
    navigator.ServiceWorker.register("sw.js").then(registration => {
        console.log("SW Registered");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed");
        console.log(error);
    })
}

  // Function to load page from another server
  function loadExternalPage() {
   // Change the URL to the desired page from another server
    var externalPageUrl = "http://192.168.29.115/";           
    // Open the external page in a new tab
    window.open(externalPageUrl, "_blank");
    }
// Event listener for button click
  document.getElementById("click-me").addEventListener("click", loadExternalPage);
