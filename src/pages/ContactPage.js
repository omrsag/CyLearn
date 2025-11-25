import React from 'react';

const ContactPage = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <h2 className="section-title mb-4">Contact &amp; Feedback</h2>
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input className="form-control" type="text" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Tell us what you think about YallaFood..."
                ></textarea>
              </div>
              <button type="button" className="btn btn-danger">
                Submit
              </button>
            </form>
          </div>

          <div className="col-lg-6">
            <div className="p-4 bg-light rounded-3 h-100">
              <h5 className="fw-bold mb-3">Team:</h5>
              <p className="mb-3">
                <strong></strong> Othman Saghir &amp; Zein Nouf
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> 
  )
};

export default ContactPage;
