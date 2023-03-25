
let mainContent = document.getElementById("main")
mainContent.setAttribute("class", "container")
//set bottom nav bar

let bottomNavBar = document.createElement("NAV")
bottomNavBar.setAttribute("class", "navbar fixed-bottom bg-light")
bottomNavBar.textContent = "@Copyright 2023"
mainContent.appendChild(bottomNavBar)

//switch "Products" to "Projects" in navbar

    let products = (document.getElementById("products").textContent)
        switch (products) {
            case "Products":
                document.getElementById("products").innerHTML = `<i class="fa-solid fa-bag-shopping"></i>Projects`
                break;
        }
     

        
// creates human resources link and icon, appends the two and inserts in the navbar before the 5th element in the list       
        
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