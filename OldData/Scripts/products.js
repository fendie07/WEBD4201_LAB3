//Get main tag from the document

    let mainContent = document.getElementById("main")
    mainContent.setAttribute("class", "container")
//set title for the page
   
    let title = document.getElementById("title")
    title.textContent = "WEBD 6201 LAB 1 PRODUCTS"
// create and set text content for headings and paragraphs

    let firstHeading = document.createElement("h1")
    firstHeading.textContent = "Project 1: OOP II - Ticket Customer Management System"
    let firstParagraph = document.createElement("p")
    firstParagraph.textContent = "Welcome to our products page, here you will see our favourite products. First is a program created for our OOP II class which was a program that read and validated customer ticket inputs, coded using C++."
    let secondHeading = document.createElement("h1")
    secondHeading.textContent = "Project 2: DATABASE MANAGEMENT - Commercial Database System"
    let nextParagraph = document.createElement("p")
    nextParagraph.textContent = "We've also created a working database system using SQL. We developed 20 fields across 6 tables, all logically related and enforced using foreign keys"
    let thirdHeading = document.createElement("h1")
    thirdHeading.textContent = "Project 3: .NET FRAMEWORK DEVELOPMENT - Character Creation Application"
    let thirdParagraph = document.createElement("p")
    thirdParagraph.textContent = "We have also designed a Windows Form that allowed users to create and save unique Dungeon's and Dragon's characters to a database using C#"


    
//create and set attributes for image variables
   
    var img1 = new Image()
    img1.setAttribute("width", "500")
    img1.setAttribute("height", "300")
    img1.src = 'https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-flight-ticket-plane-pass-air-png-image_4757691.png'
    var img2 = new Image()
    img2.setAttribute("width", "200")
    img2.setAttribute("height", "300")
    img2.src='https://www.pngall.com/wp-content/uploads/2016/04/Database-Download-PNG.png'
    var img3 = new Image()
    img3.setAttribute("width", "250")
    img3.setAttribute("height", "250")
    img3.src='https://cdn.pixabay.com/photo/2017/08/31/04/01/d20-2699387_1280.png'
//append paragraphs to the page content
    
    mainContent.appendChild(firstHeading)
    mainContent.appendChild(firstParagraph)
    mainContent.appendChild(img1)
    mainContent.appendChild(secondHeading)
    mainContent.appendChild(nextParagraph)
    mainContent.appendChild(img2)
    mainContent.appendChild(thirdHeading)
    mainContent.appendChild(thirdParagraph)
    mainContent.appendChild(img3)

//set bottom nav bar

    let bottomNavBar = document.createElement("NAV")
    bottomNavBar.setAttribute("class", "navbar fixed-bottom bg-light")
    bottomNavBar.textContent = "@Copyright 2023"
    mainContent.appendChild(bottomNavBar)

//switch "Products" to "Projects" in navbar

    let products = (document.getElementById("products").textContent)
        console.log(products)
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
    humanResourcesLink.setAttribute("href", "")
    humanResourcesLink.setAttribute("class", "nav-link")
    humanResourcesLink.insertBefore(humanResourcesIcon, humanResourcesLink.children[0])
    humanResources.appendChild(humanResourcesLink)
    navBar.insertBefore(humanResources, navBar.children[4])
   


