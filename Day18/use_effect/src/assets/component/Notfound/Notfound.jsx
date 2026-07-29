import error from '../../error404.jpg'
export default function Notfound() {
    return (
    <>
    
            <div className="container mx-auto"></div>
            <img src={error} alt="not found image"className='w-100' />
    </>
    )
}