import '../CSS/about.css';

function About() {
    const onButtonClick = () => {
        fetch('SamplePDF.pdf').then(response => {
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
                <div className='insideText'>
                    Gyaan
                </div>
                <div className='insideText'>
                    Gyaan
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
