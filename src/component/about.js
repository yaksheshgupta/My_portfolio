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
                    Hi, I am Yakshesh Gupta, I am SmartContract developer
                    in second year college student pursuing engineering in Computer Science. 
                    <br/>
                    <br/>
                    I have always been fascinated by the use of Blockchain and Web3 technology. I started my journey in Web3 from trading cryptocurrencies, but eventually got interested in technology behind blockchain and Dapps running on top of it. Therefore, I am keenly interested in building my career in this field.
                     Ever since my 8th grade I have been coding and doing development. I am a self taught blockchain application developer and continuing to build projects with the help of the free online resources available on the internet.
                    <br/>
                    <br/>
                    I am always open for new projects and contribute in open source projects.
                </div>
                <button className='abt-btn' onClick={onButtonClick}>
                    Download resume!
                </button>
            </div>
            <div style={{ marginBottom: "10rem" }}></div>
        </>
    );
}

export default About;
