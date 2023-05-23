import React from 'react';
import { validate, handlePostComment,validateName,validateEmail,validateComment } from '../../utilities/validateContactForm';

const Contact = () => {
  
    return (
        <>  
            <section id='contact' className='contact'>
                <div className='cont'>
                    <div className="content-card">
                        <form onSubmit={handlePostComment} noValidate>
                            <h2>Kontakt</h2>
                            <div className="col-12 py-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Namn"
                                    required
                                    id="name"
                                    onKeyUp={(e) => validateName(e.target)}
                                />
                                <div id="error-name" className="error"></div>
                            </div>
                            <div className="col-12 py-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                    id="email"
                                    onKeyUp={(e) => validateEmail(e.target)}
                                />
                                <div id="error-email" className="error"></div>
                            </div>
                            <div className="col-12 py-1">
                                <textarea
                                    name="message"
                                    placeholder="Skriv här!"
                                    className="form-control textar"
                                    required
                                    id="comments"
                                    onKeyUp={(e) => validateComment(e.target)}
                                ></textarea>
                                <div id="error-comments" className="error"></div>   
                            </div>
                            <div className="col-12 py-3">
                                <div className="g-recaptcha" data-sitekey="6LfR5SMjAAAAAAN-6DjqHeIwS7_ls9eWnZYOOYwN">
                                    {/* reCAPTCHA goes here */}
                                </div>
                            </div>
                            <div className="col-12 py-1">
                                <button type="submit" name="submit" className="btn btn-lg btn-outline-light">
                                    Skicka
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
