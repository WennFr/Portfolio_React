import React, { useState } from 'react';


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <>
            <section id='contact' className='contact'>
                <div className='cont'>
                    <div className="content-card">
                        <form onSubmit={handleSubmit}>
                            <h2>Kontakt</h2>
                            <div className="col-12 py-2">
                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    placeholder="Namn"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-12 py-2">
                                <input
                                    type="email"
                                    required
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-12 py-1">
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Skriv här!"
                                    className="form-control textar"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
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