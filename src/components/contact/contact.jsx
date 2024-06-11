import "../../App.scss"

function Contact({ mode }) {
    return (
        <div className={mode == "dark" ? "About About-dark" : "About"}>
            <div className="about-box">
                <p className={mode == "dark" ? "head head-dark" : "head"}>Contact</p>
                <p className={mode == "dark" ? "about-text about-text-dark" : "about-text"}>
                    You can send me message via email, I am always open to collaborate and connect with new people.



                </p>

                <div className={mode == "dark" ? "contact-box contact-box-dark" : "contact-box"}>
                    <form action="https://api.web3forms.com/submit" method="POST" id="form" className={mode == "dark" ? "contact-form contact-form-dark" : "contact-form"}>
                        <input type="hidden" name="access_key" value="2ce64ebd-7097-4f9a-bafb-3d7f49b4b372" />
                        <input type="hidden" name="subject" value="Message from Portfolio" />



                        <input type="text" name="name" id="name" placeholder="Full Name" required className="contact-inp contact-inp-dark" />

                        <input type="email" name="email" id="email" placeholder="E-mail address" required className="contact-inp contact-inp-dark" />

                        <input type="text" name="phone" id="phone" placeholder="Phone number" required className="contact-inp contact-inp-dark" />

                        <textarea rows="5" name="message" id="message" placeholder="Your Message" required className="contact-txt contact-txt-dark"></textarea>
                        <button type="submit" className="contact-submit" >
                            Send Message
                        </button>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact