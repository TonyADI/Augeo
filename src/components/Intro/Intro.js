import './Intro.css';

export const Intro = ({logo, title}) => {
    return (
        <div className="intro-container">
            <div className='logo-container'>
                <div>
                    <img 
                        src={logo} 
                        alt="site-logo"
                    />
                    <h1>
                        {title}
                    </h1>
                </div>
            </div>
            <div className='divider'></div>
            <div className='author-container'>
                <div>
                    <h1>Made By</h1> 
                    <h1> Emmanuel Tony-Adiari</h1>
                </div>
            </div>
        </div>
    )
}