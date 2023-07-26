import headerDesktopImg from '../assets/image-header-desktop.jpg';
import headerMobileImg from '../assets/image-header-mobile.jpg';

export default function StatsPreview() {
    return(
        <div className='card'>
            <div className='content'>
                <div className='text'>
                    <h1 className='title'>Get <span className='highlight'>insights</span> that help your business grow.</h1>
                    <p className='description'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall effiency.</p>
                </div>
                <div className='info'>
                    <div className='box'>
                        <div className='value'>10k+</div>
                        <div className='key'>Companies</div>
                    </div>
                    <div className='box'>
                        <div className='value'>314</div>
                        <div className='key'>Templates</div>
                    </div>
                    <div className='box'>
                        <div className='value'>12M+</div>
                        <div className='key'>Queries</div>
                    </div>
                </div>
            </div>
            <div className='media'>
                <picture>
                    <source media='(max-width: 1150px)' srcSet={headerMobileImg}/>
                    <img className='media' src={headerDesktopImg}/>
                </picture>
                <div className='media filter'></div>
            </div>
            
        </div>
    )
}