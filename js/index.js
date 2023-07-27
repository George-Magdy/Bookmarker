

var siteName = document.getElementById("siteName")
var siteURL = document.getElementById("siteURL")

var webSites = []

if (localStorage.getItem("webSites") != null) {

    webSites = JSON.parse(localStorage.getItem("webSites"))
    
    displayWebSite()
}


function addWebSite() {

   var webSite = {

    name: siteName.value ,
    URL: siteURL.value ,

    }

    webSites.push(webSite)

    displayWebSite()

    localStorage.setItem("webSites", JSON.stringify(webSites))

}

function displayWebSite() {

    var bookMark = ""

    for (let i = 0; i < webSites.length; i++) {

        bookMark += `<div class="container bg-gray bg-content py-4">
        <div class="row text-start align-items-center">
         <div class="col-md-3">
             <h3 class="fw-bolder">${webSites[i].name}</h3>
         </div>
         <div class="col-md-2">
         <a href="${webSites[i].URL}" target="_blank"><button  class="btn btn-primary btn-style my-3 text-white">Visit</button></a>
          <button onclick="deleteWebSite(${i})"  class="btn btn-danger btn-style2 my-3 text-white">Delete</button>
         </div>
        </div>
     </div>`

    }
    
    document.getElementById("bookMarks").innerHTML = bookMark
}

function deleteWebSite(index) {

    webSites.splice(index, 1)

    displayWebSite()

    localStorage.setItem("webSites", JSON.stringify(webSites))
    
}

