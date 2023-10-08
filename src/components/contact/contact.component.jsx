import React from "react";
import emailjs, { init } from "emailjs-com";
init("IyoSjpssngo4Yepvh");

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k4m306j",
        "template_btzk7jq",
        e.target,
        "IyoSjpssngo4Yepvh"
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you for your time. I will reply as soon as possible!");
        }
      })
      // Handle errors here however you like
      .catch((err) =>
        console.error(
          "Failed to send feedback. Error: ",
          err,
          process.env.REACT_APP_EMAILJS_USERID
        )
      );
  }

  return (
    <div id="contact">
      <div className="gridlayout1 start">
        <div>
          <h2>Contact</h2>
          <p>
            Drop a message, let’s connect, will reach out as soon as possible.
          </p>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="grid2">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="Please enter your full name"
                autoComplete="off"
              />
              <br />
              <label htmlFor="email">Email:</label>
              <br />
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Please enter your email address"
                autoComplete="off"
              />
            </div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="user_message"
              placeholder="Please enter your message"
              autoComplete="off"
            />
            <button type="submit" value="Send">
              &lt; Send /&gt;
            </button>
          </form>
        </div>
        <div>
          <h2>CONNECT</h2>
          <p>Please feel free to also reach out on other platforms.</p>
          <div className="grid3">
            <a href="www.linkedin.com/in/oluchi-okpala">
              <h3>LINKEDIN</h3>
              <p>Connect with me</p>
            </a>
            <a href="https://twitter.com/chiomadans">
              <h3>TWITTER</h3>
              <p>Check out project announcements</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
