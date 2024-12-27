


// Handle Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Mobile number validation
    const mobileNumber = form.querySelector('input[placeholder="Enter mobile number"]').value;
    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        alert("Mobile number must be exactly 10 digits.");
        return;
    }

    // Capture form data
    // const formData = {
    //     fullName: form.querySelector('input[placeholder="Enter your name"]').value,
    //     dateOfBirth: form.querySelector('input[placeholder="Enter birth date"]').value,
    //     email: form.querySelector('input[placeholder="Enter your email"]').value,
    //     mobileNumber: mobileNumber,
    //     gender: form.querySelector('select').value,
    //     occupation: form.querySelector('input[placeholder="Enter your ccupation"]').value,
    //     idType: form.querySelector('input[placeholder="Enter ID type"]').value,
    //     idNumber: form.querySelector('input[placeholder="Enter ID number"]').value,
    //     issuedAuthority: form.querySelector('input[placeholder="Enter issued authority"]').value,
    //     issuedState: form.querySelector('input[placeholder="Enter issued state"]').value,
    //     issuedDate: form.querySelector('input[placeholder="Enter your issued date"]').value,
    //     expiryDate: form.querySelector('input[placeholder="Enter expiry date"]').value,
    //     addressType: form.querySelector('input[placeholder="Permanent or Temporary"]').value,
    //     nationality: form.querySelector('input[placeholder="Enter nationality"]').value,
    //     state: form.querySelector('input[placeholder="Enter your state"]').value,
    //     district: form.querySelector('input[placeholder="Enter your district"]').value,
    //     blockNumber: form.querySelector('input[placeholder="Enter block number"]').value,
    //     wardNumber: form.querySelector('input[placeholder="Enter ward number"]').value,
    //     fatherName: form.querySelector('input[placeholder="Enter father name"]').value,
    //     motherName: form.querySelector('input[placeholder="Enter mother name"]').value,
    //     guardianName: form.querySelector('input[placeholder="Enter guardian name"]').value,
    //     FatherOccupation: form.querySelectorAll('input[placeholder="Enter occupation here"]')[0].value,
    //     MotherOccupation: form.querySelectorAll('input[placeholder="Enter occupation here"]')[1].value,
    //     GuardianOccupation: form.querySelectorAll('input[placeholder="Enter occupation here"]')[2].value,
    // };

    // Save data to local storage
    // localStorage.setItem('formData', JSON.stringify(formData));

    // Show popup confirmation
    // alert("Your details have been saved successfully!");

    // Clear the form fields
    form.reset(); // This will reset all input fields to their default values
});