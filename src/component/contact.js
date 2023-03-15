import '../CSS/contact.css';

function Contact() {
    function callMail() {
        window.location.href = 'mailto:yaksheshgupta59@gmail.com'
    }
    return (
        <>
            <div className='about'>
                Contact Me
            </div>
            <img src="/img/phone.png" alt='loading' className='ic' />
            <div className='a-flex'>
                Communication is the key!
            </div>
            <div className='text'>
                <div className='insideText'>
                    I am open to colab and make something big.
                </div>
                <div className='insideText'>
                    Gyaan
                </div>
                <div className='insideText'>
                    Gyaan
                </div>
                <div className='insideText'>
                    Gyaan
                </div>
                <div className='detail'>

                    <button onClick={callMail}>
                        Mail Me!
                    </button>
                    <br />
                    <a href='https://twitter.com/GuptaYakshesh'>
                        <button>
                            Twitter
                        </button>
                    </a><br />
                    <a href='https://www.linkedin.com/in/yakshesh-gupta-254643230/'>
                        <button>
                            LinkedIn
                        </button>
                    </a>
                    <br />
                    <a href='https://twitter.com/GuptaYakshesh'>
                        <button>
                            Github
                        </button>
                    </a>

                </div>
            </div>
            <div style={{ marginBottom: "10rem" }}></div>
        </>
    );
}

export default Contact;
