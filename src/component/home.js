import '../CSS/home.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className='flex-container'>
                <div>
                    <Link to='/about' className='text1' ></Link>
                </div>
                <div>
                    <Link to='/work' className='text2' ></Link>
                </div>
                <div>
                    <Link to='/contact' className='text3'></Link>
                </div>
            </div>
        </>
    );
}

export default Home;
