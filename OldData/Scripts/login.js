let mainContent = document.getElementById("main")
mainContent.setAttribute("class", "container")

let title = document.getElementById("title")

title.textContent = "Login"


let humanResourcesIcon = document.createElement("i")
humanResourcesIcon.setAttribute("class", "fa-solid fa-person")

let navBar = document.getElementById("navbarNav")


let humanResourcesLink = document.createElement("a")
let humanResources = document.createElement("li")
humanResources.setAttribute("class", "nav-item")
humanResourcesLink.innerHTML = "<i class = fa-solid fa-person></i>Human Resources"
humanResourcesLink.setAttribute("href", "#")
humanResourcesLink.setAttribute("class", "nav-link")
humanResourcesLink.insertBefore(humanResourcesIcon, humanResourcesLink.children[0])
humanResources.appendChild(humanResourcesLink)
navBar.insertBefore(humanResources, navBar.children[4])

let products = (document.getElementById("products").textContent)
        switch (products) {
            case "Products":
                document.getElementById("products").innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Projects`
                break;
        }
     

//when the username field is filled, saves the text value in a list object and appends it to the navbar
$('#inputUsername').on("blur", function(){
    let userName = $(this).val()
    let userNameList = document.createElement("li")
    userNameList.innerHTML = userName
    userNameList.setAttribute("class", "navbar-text")
    
    
//prevents default method from happening and appends username to navbar and changes login to logout
    $('#loginButton').on("click", function(){ 
        event.preventDefault()
        navBar.insertBefore(userNameList, navBar.children[6])
        let login = (document.getElementById("login").textContent)
        switch (login) {
            case " Login":
                document.getElementById("login").innerHTML = `<i class="fa-solid fa-right-from-bracket"></i> Logout`
                break;
        }


    })
})
