import '../CSS/about.css';

function About() {
    const onButtonClick = () => {
        fetch('Yakshesh_resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Yakshesh_resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <div className='about'>
                About
            </div>
            <img src="/img/emoji.png" alt='loading' className='ic' />
            <div className='a-flex'>
                Know me more!
            </div>
            <div className='text'>
                <div className='insideText'>
                    Hi, I'm Yakshesh Gupta, a Smart Contract and Web Developer currently pursuing my engineering degree in Computer Science as a second-year college student.
                    <br />
                    <br />
                    I have a deep fascination for the transformative potential of Blockchain and Web3 technology. My journey in Web3 began with cryptocurrency trading, but it quickly led me to dive into the underlying technology of blockchain and the development of decentralized applications (DApps). This captivating field has ignited my passion, and I'm determined to build my career at the forefront of this ever-evolving industry.
                    <br />
                    <br />
                    Throughout my academic journey, I have actively engaged in coding and development, starting as early as 8th grade. With an insatiable appetite for knowledge, I have taught myself the intricacies of blockchain application development and continue to enhance my skills through free online resources available on the internet.
                    <br />
                    <br />
                    I take great pride in organizing and conducting workshops to share my expertise and passion for blockchain technology. Recently, I organized a highly successful workshop called "CHAINCRAFT" in collaboration with IET-VIT Chapter. It attracted over 80 participants who gained valuable insights into blockchain basics and hands-on experience in deploying smart contracts using Remix, Metamask, and other powerful tools. The positive feedback and active participation from the attendees reinforced my dedication to imparting knowledge and fostering growth in the tech community.
                    <br />
                    <br />
                    Additionally, I had the privilege of organizing and speaking at the "DevOlution" workshop, hosted by Apple Developer Group Club and IEEE-VIT club. With over 280 registrations, the workshop was divided into two segments. In the first segment, I co-speaker taught participants how to build basic websites using HTML, CSS, and React.js. This provided a solid foundation for the second segment, where I delved into the basics of blockchain, covering topics such as smart contract development and integrating ERC20 tokens with the frontend created in the workshop. The attendees were able to bridge web development and blockchain technology seamlessly, gaining valuable practical skills.
                    <br />
                    <br />
                    These workshop experiences have not only allowed me to impart knowledge but have also strengthened my communication, leadership, and organizational skills. I am constantly seeking new opportunities to share my expertise, contribute to the community, and inspire others to explore the potential of emerging technologies.

            </div>
            <button className='abt-btn' onClick={onButtonClick}>
                Download resume!
            </button>
        </div >
            <div style={{ marginBottom: "10rem" }}></div>
        </>
    );
}

export default About;
