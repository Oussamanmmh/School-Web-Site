const Location = () => {
    return (
        <div className="container flex flex-col justify-center item-center  mx-auto px-4 mt-10 " id="location">
            <h1 className="text-3xl font-bold text-center">Location</h1>
            <div className="mt-5">
                <p className="text-lg text-gray-500 text-center">Our school is located in the heart of the city. You can find us at:</p>
                <p className="text-lg text-gray-500 text-center mb-8">7 Rue BenMihoub, Guelma</p>
                <div className=' '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4424.8441440562965!2d7.43420193970819!3d36.46637887460946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f05dbfb5a747d9%3A0x2f16bc43eefcc247!2zU21hcnQgTGFuZ3VlIEwuVC5DINmF2LHZg9iyINiq2LnZhNmK2YUg2KfZhNmE2LrYp9iq!5e0!3m2!1sfr!2sdz!4v1719277316584!5m2!1sfr!2sdz" style={{width: "100%" , height: "450px", border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mb-10 sm:w-full sm:h-350 "></iframe>
            </div>
            </div>
        </div>
    );
}
export default Location;