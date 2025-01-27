import { useState } from "react";
import styles from './Contact.module.css'; // Import the styles from Contact.module.css

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Check if any of the fields are empty
    if (!formData.name || !formData.email || !formData.message) {
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
          <h2>Contact Me!</h2>
          <hr />
        </div>
        <input
          type="hidden"
          name="access_key"
          value="1899da86-5d02-4f2e-9267-8af3112bd437"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.contactInputs} // Use styles for the input
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.contactInputs} // Use styles for the input
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Leave your Message"
          className={styles.contactInputs} // Use styles for the textarea
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
