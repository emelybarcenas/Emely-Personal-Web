function Contact(){
return(
    <div class="contact-container">
    <form action="https://api.web3forms.com/submit" method="POST" class="contact">
        <div className="contact-title">
            <h2>Contact Me!</h2>
            <hr></hr>
        </div>
        <input type="hidden" name="access_key" value="1899da86-5d02-4f2e-9267-8af3112bd437">
        </input>
        <input type="name" name="name" placeholder="Name" className="contact-inputs"></input>
        <input type="email" name="email" placeholder="Email" className="contact-inputs"></input>
        <textarea name="message" placeholder="Leave your Message" className="contact-inputs"></textarea>
        <button type="submit">Submit</button> 
    </form>
</div>
)

}
export default Contact;