import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact position-relative" id="contact">
        <div className="container ">
          <div className="form">
            <h1 className="main-title">Contact Us</h1>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Enter Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
