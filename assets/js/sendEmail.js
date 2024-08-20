function sendMail(contactForm) {
    emailjs.send("gmail", "rosie",{
        "from_name" : contactForm.name.value,
        "from_email": contactForm.email.emailaddress.value,
        "project_name":contactForm.projectsummary.value
    })

.then(
    function(response) {
        console.log("SUCCESS", response);
    },
    function(error) {
        console.log("FAILURE", error);
    });
    return false;
}