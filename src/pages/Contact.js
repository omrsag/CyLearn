import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-3">Contact</h1>
      <p className="text-muted mb-4">
        If you have any questions or want to get in touch, feel free to send us a message using the form below.
      </p>

      <div className="row">
        <div className="col-lg-6">
          <form className="cy-card p-4">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" type="text" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" type="email" placeholder="you@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your message here..."
              />
            </div>
            <button type="button" className="btn btn-info w-100">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
