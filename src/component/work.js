import '../CSS/work.css';
import JsonData from "../data"
function Work() {
    return (
        <>
            <div className='work'>
                Work | Projects
            </div>
            {JsonData.product.map(s => {
                return (
                    <>
                        <Card key={s.disc} {...s} />
                    </>
                )
            })}
            <div className='text-work'>
                <a href='https://github.com/yaksheshgupta'>My GitHub</a>
            </div>
        </>
    );
}
export const Card = (s) => {
    return (
        <>
            <div className="content">
                <div className="content-flex" >
                    <div className='heading'>
                        {s.name}
                    </div>
                    <div className='card-flex'>
                        <div className='card-flex-content'>

                            <div className=''>
                                {s.disc}
                            </div>
                                <a href={s.gitlink} className='w-txt'><button >GitHub Link</button></a>
                        </div>
                        <img src={s.img} alt="loading.." className='imggg card-flex-content' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;
