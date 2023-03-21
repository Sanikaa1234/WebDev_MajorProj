function validateForm() {
	const nameInput = document.getElementById("name");
	const emailInput = document.getElementById("email");
	const phoneInput = document.getElementById("phone");
	const passwordInput = document.getElementById("password");
	const confirmPasswordInput = document.getElementById("confirm-password");
	const errorMessage = document.getElementById("error-message");

	// Validate name
	if (nameInput.value.length < 5) {
		errorMessage.innerHTML = "Name must be at least 5 characters long";
		return false;
	}

	// Validate email
	if (!emailInput.value.includes("@")) {
		errorMessage.innerHTML = "Email must include '@' character";
		return false;
	}

	// Validate phone number
	if (phoneInput.value === "1234567890") {
		errorMessage.innerHTML = "Phone number cannot be 1234567890";
		return false;
	}

	// Validate password
	const username = nameInput.value.toLowerCase();
	const password = passwordInput.value.toLowerCase();

	if (password === "password" || password === username || password.length < 8) {
		errorMessage.innerHTML = "Password must be at least 8 characters long and cannot be 'password' or your name";
		return false;
	}

	// Validate confirm password
	if (password !== confirmPasswordInput.value)
  {
      errorMessage.innerHTML = "Passwords do not match";
      return false;
  }

}