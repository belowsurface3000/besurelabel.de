import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showContactForm } from '../store/actions/usersActions';
import emailjs from "emailjs-com";

function Contact() {


    // contact form code
    const [userInput, setUserInput] = useState("");
    const changeHandler = (e) => {
        setUserInput((e.target.value).toLowerCase());
    }
    // emailjs start
    const emailService = process.env.EMAIL_SERVICE;
    const emailTemplate = process.env.EMAIL_TEMPLATE;
    const emailUser = process.env.EMAIL_USER;
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(emailService, emailTemplate, form.current, emailUser)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    // contact end



    // redux
    const dispatch = useDispatch();
    const contactTermsAccepted = (useSelector((state) => state.usersReducer.contact));
    const acceptCookies = () => {
        dispatch(showContactForm());
    };
    if (userInput === "okay") acceptCookies();
        

    
    return (
        <main>
            <div className="get-in-touch">
                <h2>Get in touch with Be Sure</h2>
                <h4>via Social Media:</h4>
                <div className="socials">
                    <a href="https://www.youtube.com/channel/UCB0jjmkPvZ3r9NYJ7HCtpxw" target="_blank" rel="noreferrer"><img src="/pics/yt.png" alt="Link to Be Sure's Youtube channel" /><p>Youtube</p></a>
                    <a href="https://soundcloud.com/besurelabel" target="_blank" rel="noreferrer"><img src="/pics/sc.png" alt="Link to Be Sure's Soundcloud channel" /><p>Soundcloud</p></a>
                    <a href="https://open.spotify.com/artist/6tcSqEAmHTLmrztjM0dQl2" target="_blank" rel="noreferrer"><img src="/pics/sf.png" alt="Link to Be Sure's Spotify" /><p>Spotify</p></a>
                    <a href="https://facebook.com/besurelabel" target="_blank" rel="noreferrer"><img src="/pics/fb.png" alt="Link to Be Sure's Facebook page" /><p>Facebook</p></a>
                    <a href="https://www.instagram.com/besurelabel" target="_blank" rel="noreferrer"><img src="/pics/ig.png" alt="Link to Be Sure's Instagram page" /><p>Instagram</p></a>
                    <a href="https://www.beatport.com/label/be-sure/47385" target="_blank" rel="noreferrer"><img src="/pics/bp.png" alt="Link to Be Sure's Beatport page" /><p>Beatport</p></a>
                </div>
                
                <h4>via the Contact Form:</h4>
                <h4>**ADVERTISING &amp; SPAM ARE STRICTLY FORBIDDEN**</h4>
                    {contactTermsAccepted ? 
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" name="name" placeholder="Please type in your name here" required />
                            <label htmlFor="email">Your Email:</label>
                            <input type="email" id="email" name="email" placeholder="Please type in your email here" required />
                            <label htmlFor="message">Your Message:</label>
                            <textarea id="message" name="message"></textarea>
                            <button type="submit" value="Send" className="submit-button">Send!</button>
                        </form> 
                    :
                        <form>
                            <p>Sending spam or advertising is strictly forbidden. You can use the contact form for questions or if you want to collaborate with us in music.<br/><b>Type: okay</b> to unlock the contact form:</p>
                            <label htmlFor="riddle"></label>
                            <input type="text" id="riddle" name="riddle" placeholder="Just type 'okay' in here" value={userInput} onChange={changeHandler} required />
                        </form>
                    }
            </div>
        </main>
    );
}

export default Contact;