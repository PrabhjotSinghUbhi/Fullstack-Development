// import CatImg from './assets/cat-3840x2160-kitty-siamese-blue-eyes-muzzle-beautiful-close-up-881.jpg'

function Card() {

    return (
        <section className = "m-4 w-sm min-h-1/4  text-slate-50 border-slate-400 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-2xl ">

            <div className = "max-w-[150px] max-h-[150px] rounded-full overflow-hidden place-self-center">

                <img 
                    src="../public/image.png"
                    alt="cat" 
                    className=""
                />

            </div>
            <div className="text-center p-2">
                <span className="text-3xl font-bold " >Prabhjot Singh</span>
            </div>
            <div className = "w-5/6 font-semibold mx-auto p-4">
                 I'm a passionate developer who loves building clean, responsive web apps. Always eager to learn, explore new tech, and turn creative ideas into real-world digital experiences.
            </div>
        </section>
    );
}

export default Card;
