/**
 * Essam Fendish 
 * 100857078 
 * Completed March 04, 2023
 */


//creating the User class
class User{
    constructor(firstName, lastName, email, password){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.Password = password;
    }

    get FirstName(){
        return this.m_firstName
    }

    set FirstName(firstName){
        this.m_firstName = firstName
    }

    get LastName(){
        return this.m_lastName 
    }

    set LastName(lastName){
        this.m_lastName = lastName
    }

    get Email(){
        return this.m_email 
    }
    set Email(email){
        this.m_email = email
    }

    get Password(){
        return this.m_password
    }
    set Password(password){
        this.m_password = password
    }
//method that determines if data is missing
    serialize(){
        if(this.FirstName != "" && this.LastName !="" && this.Email != "" && this.Password!="")
            return `${this.FirstName}, ${this.LastName}, ${this.Email}, ${this.Password} `
        console.error("One or more properties or fields of the Contact Object are missing or invalid")
        return null
    }
    deserialize(data){
        let propertyArray = data.split(",")
        this.FirstName = propertyArray[0]
        this.LastName = propertyArray[1]
        this.Email = propertyArray[2]
        this.Password = propertyArray[3]
    }
//toString method
    toString(){
        return `Full Name is ${ this.FirstName } ${this.LastName} \n Email is ${this.Email} \n Password is ${this.Password} `
    }
    
    
}
//method that grabs info from the form and toStrings to the console
function ShowUserInfo(){
     let firstName = document.forms["registerForm"]["firstName"].value;
     let lastName = document.forms["registerForm"]["lastName"].value;   
     let email = document.forms["registerForm"]["inputEmail"].value;   
     let password = document.forms["registerForm"]["inputPassword2"].value;
     let confirmpass = document.forms["registerForm"]["confirmPassword"].value;

     let labUser = new User(firstName,lastName,email,password)
     labUser.serialize()
     console.log(labUser.toString())
     
     
     

    
//a function that is called when the submit button is clicked on the contactForm form. Retrieves the values of the forms and prints them to the console. 
//After 3 seconds, calls the window.setTimeout function and re-directs the user to the home page.   
}
function showContactInfo() {
    let fullName = document.forms["contactform"]["fullName"].value;
    let contactNumber = document.forms["contactform"]["contactNumber"].value;
    let emailAddress = document.forms["contactform"]["emailAddress"].value;
    let additionalComments = document.forms["contactform"]["additionalComments"].value;
        console.log(`Name: ${ fullName } \n Contact Number: ${ contactNumber } \n Email Address: ${ emailAddress} \n Additional Comments: ${ additionalComments }`)
    event.preventDefault()    
    window.setTimeout(function(){

        window.location.href="./index.html"
    }, 3000)
}