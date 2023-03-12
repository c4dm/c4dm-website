import React from "react";


const ContactForm = () => {
    return (
        <div className="container my-5 mt-5 mx-5 px-5">
            <h2 className="title">Contact Us</h2>
            <form action="" method="post">
                <div className="field">
                    <label for="name" className="label is-size-4 has-text-weight-light"></label>
                    <div className="control has-icons-left">
                        <input type="text" name="name" id="name" className="input" placeholder="Name" autofocus/>
                            <span className="icon is-left">
                                <i className="fa fa-user"></i>
                            </span>
                    </div>
                </div>
                <div className="field">
                    <label for="email" className="label is-size-4 has-text-weight-light"></label>
                    <div className="control has-icons-left">
                        <input type="email" name="email" id="email" className="input" placeholder="Email"/>
                            <span className="icon is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                    </div>
                </div>
                <div className="field">
                    <label for="message" className="label is-size-4 has-text-weight-light"></label>
                    <textarea name="message" id="message" rows="5" className="textarea is-medium" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="button is-success is-size-5">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm