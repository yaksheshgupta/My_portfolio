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
            <div className='text'>
                <br />
                <br />
                <br />
                <div className='insideText'>
                    I'm always on the lookout for exciting opportunities to collaborate on new software applications or open-source projects. I believe that these projects not only provide valuable learning experiences but also have the potential to make a real difference in the world. Whether it's developing a new tool to help people manage their finances, creating an app to streamline workflow processes, or contributing to an open-source project that helps bring technology to underprivileged communities, I'm eager to get involved and make a meaningful impact.
                    <br />
                    <br />

                    If you're interested in working together to create something truly innovative, I'm open to exploring new possibilities and pushing the boundaries of what's possible with code. I'm always looking for new challenges and opportunities to learn, grow, and make a difference through my work. So if you share my passion for coding and want to collaborate on a project, please don't hesitate to reach out. I'm excited to see what we can create together!
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
