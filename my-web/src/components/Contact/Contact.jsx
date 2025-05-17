import { useState } from "react";
import styles from './Contact.module.css'; // Import the styles from Contact.module.css

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Check if any of the fields are empty
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage("All fields are required!");
    } else {
      // If all fields are filled, submit the form
      setErrorMessage(""); // Clear any previous error
      e.target.submit(); // Submit the form
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.contactContainer}>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
        className={styles.contact} // Use styles for the form
      >
        <div className={styles.contactTitle}>
          <hr />
        </div>
        <input
          type="hidden"
          name="access_key"
          value={import.meta.env.VITE_PUBLIC_ACCESS_KEY}
        />
        <div className={styles.nameContainer}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={styles.contactNameInput} // Use specific styles for the first name input
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={styles.contactNameInput} // Use specific styles for the last name input
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.contactEmailInput} // Use specific styles for the email input
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Leave your Message"
          className={styles.contactMessageInput} // Use specific styles for the message textarea
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>Submit</button> {/* Apply styles for the button */}

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} {/* Apply styles for error message */}
      </form>
    </div>
  );
}

export default Contact;