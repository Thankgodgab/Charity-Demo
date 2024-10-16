// scrool on reveal animation

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 500;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animation');
            console.log(offset);
        }
        else {
            // sec.classList.remove('show-animation')
        }
    })
}

const sidebar = document.querySelector('.sidebar')

function showSidebar(){
    sidebar.classList.add("showSidebar");
}

function closeSidebar(){
    sidebar.classList.remove("showSidebar");
}

function volunteerPage(){
    window.location.href = "./Become-Volunteer.html";
}
var slideImg = document.getElementById("sildeImg");

var images = new Array(
    "./assest/Home Page/slide-banner-02.jpg",
    "./assest/Home Page/slide-banner-03.jpg",
    "./assest/Home Page/slide-banner-01.jpg"
);

 var len = images.length;
 var i = 0;

 function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 5000);
        
 }

 var storySlider = document.getElementById("storySlider");

 var storySlideImg = new Array(
    "./assest/Home Page/img-slide-02.jpg",
    "./assest/Home Page/img-slide-01.jpg"
 );

 var length = storySlideImg.length;

 function storySlideShow(){
    if( i > length-1){
        i = 0;
    }
    storySlider.src = storySlideImg[i];
    i++;
    setTimeout('storySlideShow()', 7000);

 }
function showForm(){
    document.querySelector(".popup").classList.add("active");
    document.getElementById('body').classList.add("active-body");
}
function closeForm(){
    document.querySelector(".popup").classList.remove("active");
    document.getElementById('body').classList.remove("active-body");
}

//Toast Notification

let toastBox = document.getElementById('toastBox');
let successMsg = "<i class='bx bxs-check-circle'></i> Registration Successful";
let failedMsg = "<i class='bx bxs-x-circle'></i> Registration Failed, Please Try Agian ";
let emailsentSuccessMsg = "<i class='bx bxs-check-circle'></i> Mail Sent Successful";
let failedEmailMsg = "<i class='bx bxs-x-circle'></i> Failed to send Email, Please Try Agian";

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('Failed')){
        toast.classList.add('error');
    }
    if(msg.includes('Successful')){
        toast.classList.add('success');
    }


    setTimeout(()=>{
        toast.remove();
    }, 6000);
}

document.addEventListener('DOMContentLoaded', () => {

    // Become volunteer Form Validation and email send
    emailjs.init("_6rZpFxklF4U1snMo");

    function volunteerForm(event){
        event.preventDefault();

        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const number = document.getElementById("phone").value;
        const zipcode = document.getElementById("zipcode").value;
        const reason = document.getElementById("reason").value;
        let errorMessage2 = document.getElementById("errorMessage2");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        

        if (!firstName) {
            errorMessage2.textContent = "Please enter your First name.";
            return;
        }
        if (!lastName) {
            errorMessage2.textContent = "Please enter your Last name.";
            return;
        }

        if (!email) {
            errorMessage2.textContent = "Please enter your email.";
            return;
        } else if (!emailPattern.test(email)) {
            errorMessage2.textContent = "Please enter a valid email address.";
            return;
        }
        if (!number) {
            errorMessage2.textContent = "Please enter your Phone Number.";
            return;
        } else if (!phonePattern.test(number)) {
            errorMessage2.textContent = "Please enter a valid Phone Number.";
            return;
        }
        if (!zipcode) {
            errorMessage2.textContent = "Please enter your Country Zipcode.";
            return;
        }

        if (!reason) {
            errorMessage2.textContent = "Please enter a reason.";
            return;
        }
        
        emailjs.send("service_yea8icj", "template_4qqyopk",{
            from_firstName:firstName,
            from_lastName:lastName,
            from_number:number,
            from_email:email,
            from_zipcode:zipcode,
            reason:reason,
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status);
            showToast(successMsg);
            document.getElementById("volunteer-form").reset();
            setTimeout(paymentPage, 6000);

        }, function(error){
            console.log('FAILED...', error);
            showToast(failedMsg);
        });

        errorMessage2.textContent = "";
            return;

    }
    

    document.getElementById("volunteer-btn").addEventListener("click", volunteerForm)
    
});
function redirectAfterTimeout() {
    setTimeout(function() {
        window.location.href = "./payment.html";
        // window.location.href = 'another-page.html'; // Uncomment this line to redirect to another page
    }, 5000); // 5000 milliseconds = 5 seconds
}
function redirectToHome() {
    setTimeout(function() {
        window.location.href = "./payment.html";
        // window.location.href = 'another-page.html'; // Uncomment this line to redirect to another page
    }, 5000); // 5000 milliseconds = 5 seconds
}
function paymentPage(){
    window.location.href = "./loadingPage.html";
}
function volunteerpage(){
    window.location.href = "./Become-Volunteer.html";
}
function causesPage(){
    window.location.href = "./cause.html";
}



// Contact Form Validation and email send

$(document).ready(function() {
    $("#contact-form-btn").click(function(event) {
        // Call the contactFormValidation function
        if (contactFormValidation()) {
            // If validation passes, reset the form using jQuery
            $(this)[0].reset();
        } else {
            // Prevent form submission if validation fails
            event.preventDefault();
        }
    });


    // $("#contact-form-btn").click(function(event) {
    //     // Call the contactFormValidation function
    //     contactFormValidation(event);
    // });
});


function contactFormValidation() {
    // event.preventDefault();

    let contactName = $("#contact-name").val();
    let contactEmail = $("#contact-email").val();
    let contactMessage = $("#contact-message").val();
    let errorMessage = $("#errorMessage");
    let emailPattern2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contactName) {
        errorMessage.text("Please enter your name.");
        return false;
    }
    if (!contactEmail) {
        errorMessage.text("Please enter your email.");
        return false;
    } else if (!emailPattern2.test(contactEmail)) {
        errorMessage.text("Please enter a valid email address.");
        return false;
    }

    if (!contactMessage) {
        errorMessage.text("Please enter your message.");
        return false;
    }
    emailjs.send("service_z4ews7n", "template_mh365q8",{
        contactName:contactName,
        contactEmail:contactEmail,
        contactMessage:contactMessage,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status);
        errorMessage.css("color", "green");
        errorMessage.text("Mail Sent Successfull");
        // $("#contact-for/m")[0].reset();
        
    }, function(error){
        console.log('FAILED...', error);
        errorMessage.css("color", "red");
        errorMessage.text("Failed to send Email, Please Try Agian");
    });
    
    document.getElementById("contact-form").reset();
    // errorMessage.text("");
    return true;
}