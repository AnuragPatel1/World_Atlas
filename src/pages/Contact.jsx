export const Contact = () => {

    const handleFormSubmit = (formData) => {
         const formInputData =  Object.fromEntries(formData.entries());
         console.log(formInputData); 
    };

    return (
        <section className="section-contact">
           <h2 className="container-title">Contact Us</h2> 
           
           <div className="container contact-wrapper">

                <form action={handleFormSubmit}>
                    <input 
                        type="text" 
                        className="form-control"
                        required 
                        placeholder="Enter Your Name"
                        name="username"
                        autoComplete="off" 
                    />

                    <input 
                        type="email" 
                        className="form-control"
                        required 
                        placeholder="Enter Your Email"
                        name="email"
                        autoComplete="off" 
                    /> 
                    
                    <textarea 
                        className="form-control"
                        rows="10"
                        required 
                        placeholder="Enter Your Message"
                        name="message"
                        autoComplete="off" 
                    />
                    
                    <button type="submit" value="send">Send</button>
                </form>
           </div>
        </section>
    )
}