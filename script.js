function validateForm() {
    // Retrieve input data from form
    const studentName = document.getElementById('student_name').value.trim();
    const parentName = document.getElementById('parent_name').value.trim();
    const parentEmail = document.getElementById('parent_email').value.trim();
    const parentPhone = document.getElementById('parent_phone').value.trim();
    const studentAge = document.getElementById('student_age').value.trim();
    const desiredProgram = document.getElementById('desired_program').value.trim();
  
    // Retrieve hidden input data from form
    const coachingName = document.getElementById('coaching_name').value;
    const contactEmail = document.getElementById('contact_email').value;
    const contactPhone = document.getElementById('contact_phone').value;
  
    // Validate input data
    if (studentName === '' || parentName === '' || parentEmail === '' || parentPhone === '' || studentAge === '' || desiredProgram === '') {
      alert('Error: Please fill out all required fields');
      return false;
    }
  
    // Validate email address format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(parentEmail)) {
      alert('Error: Please enter a valid email address');
      return false;
    }
  
    // Validate phone number format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(parentPhone)) {
      alert('Error: Please enter a 10-digit phone number');
      return false;
    }
  
    // Construct message body
    const messageBody = `
      Coaching Name: ${coachingName}
      Student's Name: ${studentName}
      Parent's Name: ${parentName}
      Parent's Email: ${parentEmail}
      Parent's Phone: ${parentPhone}
      Student's Age: ${studentAge}
      Desired Program: ${desiredProgram}
      Previous Experience: ${document.getElementById('previous_experience').value.trim()}
      Additional Comments: ${document.getElementById('additional_comments').value.trim()}
    `;
  
    // Send email using default mail client
    const mailToLink = `mailto:${contactEmail}?subject=${coachingName} Registration Form&body=${messageBody}`;
    location.href = mailToLink;
  
    // Prevent form submission
    return false;
  }