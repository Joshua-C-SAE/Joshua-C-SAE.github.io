/* Creates Pop Up Window to Preview Image */
function openPreview(imageSrc) {
   /*Set Pop Up Window to Flex Style */
    const modal = document.getElementById("previewModal").style.display = "flex";
    
    /*Set preview image to image from source */
    const previewImg = document.getElementById("previewImage").src = imageSrc;
};

/*Closes Pop Up Window */
function closePreview(){
    /*Turns off the pop up window */
    document.getElementById("previewModal").style.display = "none";
};

/* Locate the Submit Button in the Contact Form */
document.getElementById("contactForm").addEventListener("submit", function (event) {
    /* Stop the page from refreshing */
    event.preventDefault();

    /* Get the Input Name */
    let name = document.getElementById("name").value;
    /* Get the Input Email */
    let email = document.getElementById("email").value;
    /* Get the Input Message */
    let message = document.getElementById("message").value;

    /* Any Fields are Empty */
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        /* Alert the User to fill all fields */
        alert("Please fill in all fields");
        /* Exit Function*/
        return;
    }

    /* Compile Message */
    let userMessage = {
        /* Store Name */
        name: name,
        /* Store Email */
        email: email,
        /* Store Message */
        message: message
    };

    /* Store Compiled Message Locally */
    /* Swap for send to email at a later stage */
    localStorage.setItem("Message", JSON.stringify(userMessage));

    /* Alert the user that their message has been sent */
    alert(`Thank you, ${name}! Your message has been sent. I hope to view it as soon as i can!`);

    /* Print the save message to console */
    console.log("Saved user data:", userMessage);

    /* Clear Form once Submitted */
    document.getElementById("contactForm").reset();
  });

