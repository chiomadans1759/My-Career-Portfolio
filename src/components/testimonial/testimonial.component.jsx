import React from "react";
import me from "../../assets/me.jpg";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Client Testimonial</h2>
      <p>
        Online project testimonial and feedback for web development project
        delivery.
      </p>
      <div className="gridlayout1">
        <div>
          <img src={me} alt="Mockup of Darling Salon Website" />
        </div>
        <div>
          <div>
            <img
              className="clientPicture"
              src={me}
              alt="Wendy Darling, the owner of Darling Salon"
            />
          </div>

          <p>
            Okpala Oluchukwu is a talented developer with very good design skills
            which surprised me with super professional communication skills and
            a strong marketing sense that enables him to see the big picture of
            projects.
          </p>
          <p>
            He will get the job done on time, suggest improvements, and will
            leave you with an overall feeling that you received a lot more then
            you paid for it.
          </p>
          <p>
            He goes the extra mile to create long-term partnerships, not just
            one-time jobs. A pleasure to work with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
