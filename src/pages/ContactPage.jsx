export default function ContactPage() {
    return (
        <div className="contact">
            <div className="contact-content">
                <h1>Contact Us</h1>
                <p>
                    We would love to hear from you! Please feel free to contact us using the form below or by email at info@example.com.
                </p>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <br />
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <br />
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <br />
                    <button type="submit">Send Message</button>
                </form>
                <p>
                    You can also reach us by phone at 123-456-7890 or by mail at 123 Main Street, Anytown, USA.
                </p>
            </div>
        </div>)
}