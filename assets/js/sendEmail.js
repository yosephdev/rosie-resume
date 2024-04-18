function sendMail(contactForm) {

    const emailParams = {
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        project_request: contactForm.projectsummary.value
    };

    emailjs.send("service_7dej8en", "template_r0j2otc", emailParams)
        .then(
            function (response) {
                const feedbackDiv = document.getElementById('form-feedback');
                feedbackDiv.classList.remove('error');
                feedbackDiv.classList.add('success');
                feedbackDiv.textContent = 'Email sent successfully! I will get back to you soon.';
                console.log("SUCCESS", response);
                contactForm.reset(); 
            },
            function (error) {
                const feedbackDiv = document.getElementById('form-feedback');
                feedbackDiv.classList.remove('success');
                feedbackDiv.classList.add('error');
                feedbackDiv.textContent = 'Failed to send email. Please try again later.';
                console.log("FAILED", error);
            }
        );

    return false;
}
