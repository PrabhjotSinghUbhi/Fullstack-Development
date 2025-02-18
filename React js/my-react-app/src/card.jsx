import image from './assets/profilePic.jpg'

function Card() {
    return(
        <div className="card">
            <img src={image} alt="Profile Pic" height={200} width={200}/>
            <div className='card-bottom'>
                <h2>Prabhjot Singh</h2>
                <p>I am a student at chandigarh university working learning react js and i like to play chess.</p>
            </div>
        </div>
    );
}

export default Card;