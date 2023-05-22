import React, { useState } from 'react';
import { validate, handlePostComment } from '../../utilities/validateContactForm';

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
                                    required
                                    className="form-control"
                                    placeholder="Namn"
                                    onChange={validate}
                                />
                                <div id="error-name" class="error"></div>
                            </div>
                            <div className="col-12 py-2">
                                <input
                                    type="email"
                                    required
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={validate}
                                />
                                <div id="error-email" class="error"></div>
                            </div>

                            <div className="col-12 py-1">
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Skriv här!"
                                    className="form-control textar"
                                    onChange={validate}
                                ></textarea>
                                <div id="error-comments" class="error"></div>
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
    )

}
export default Contact