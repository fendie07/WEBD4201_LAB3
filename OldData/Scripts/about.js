//Get main tag from the document

    let mainContent = document.getElementById("main")
    mainContent.setAttribute("class", "container")
//set title for the page

    let title = document.getElementById("title")
    title.textContent = "WEBD 6201 LAB 1 ABOUT US"
// create and set text content for headings and paragraphs
    let firstParagraph = document.createElement("p")
    firstParagraph.textContent = "Essam Fendish, Computer Programming Student, 26 years of age, avid Dungeons and Dragons player"
    let firstHeading = document.createElement("h1")
    firstHeading.textContent = "Essam Fendish"
    var essamPhoto = new Image()
    essamPhoto.setAttribute("width", "400")
    var essamResume = new Image()
    essamResume.setAttribute("width", "500")
//create and set attributes for image variables

    essamPhoto.src = "Photos/e94163e1-6313-4a4c-9e2d-238c5e9c443f.jpg"
    essamResume.src = "Photos/EssamFendishResume_page-0001.jpg"

//append paragraphs and images to the page content

    mainContent.appendChild(firstHeading)
    mainContent.appendChild(firstParagraph)
    mainContent.appendChild(essamPhoto)
    mainContent.appendChild(essamResume)

//switch "Products" to "Projects" in navbar

    let products = (document.getElementById("products").textContent)
    console.log(products)
    switch (products) {
        case "Products":
            document.getElementById("products").innerHTML = `<i class="fa-solid fa-bag-shopping"></i>Projects`
            break;
    }
 
//set bottom nav bar

    let bottomNavBar = document.createElement("NAV")
    bottomNavBar.setAttribute("class", "navbar fixed-bottom bg-light")
    bottomNavBar.textContent = "@Copyright 2023"
    mainContent.appendChild(bottomNavBar)
    
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
   


    
    






























