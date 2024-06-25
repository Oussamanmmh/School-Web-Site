import React from "react";
import location from "../assets/pin.png";
const Footercomp = () => {
return (
    <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-4 flex flex-col">
            <div className="footer">
                <p className="text-sm text-gray-500 text-center">© 2023 Smart Language School. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm text-gray-500">Email: contact@smartlangschool.com</p>
                    <p className="text-sm text-gray-500">Téléphone: 0658014761 </p>
                </div>
                <div className="flex">
                    <a href="https://www.facebook.com/smart.labgue" className="text-gray-500 hover:text-gray-600 mr-4">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.35C0 23.406.594 24 1.325 24h11.568V14.706H9.896V11.1h2.997V8.291c0-2.966 1.812-4.584 4.455-4.584 1.266 0 2.354.094 2.671.136v3.096h-1.832c-1.437 0-1.715.684-1.715 1.684v2.208h3.43l-.448 3.606h-2.982V24h5.849c.731 0 1.325-.594 1.325-1.325V1.325C24 .594 23.406 0 22.675 0z" />
                        </svg>
                    </a>
                    
                    <a href="https://www.instagram.com/smartlangue/" className="text-gray-500 hover:text-gray-600">
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>

                </div>
            </div>
            <div className="mt-3 flex justify-center item-center">
                <img src={location} alt="location" className="h-6 w-6 mr-2" />
                <a href="https://www.google.com/maps/place/Smart+Langue+L.T.C+%D9%85%D8%B1%D9%83%D8%B2+%D8%AA%D8%B9%D9%84%D9%8A%D9%85+%D8%A7%D9%84%D9%84%D8%BA%D8%A7%D8%AA%E2%80%AD/@36.4663789,7.4342019,16.54z/data=!4m14!1m7!3m6!1s0x12f05dbfb5a747d9:0x2f16bc43eefcc247!2zU21hcnQgTGFuZ3VlIEwuVC5DINmF2LHZg9iyINiq2LnZhNmK2YUg2KfZhNmE2LrYp9iq!8m2!3d36.4666444!4d7.4371144!16s%2Fg%2F11rc492n98!3m5!1s0x12f05dbfb5a747d9:0x2f16bc43eefcc247!8m2!3d36.4666444!4d7.4371144!16s%2Fg%2F11rc492n98?entry=ttu" className="text-sm text-gray-500 text-center">Rue 7 BenMihoub  , Guelma</a>
            </div>
        </div>
    </footer>
)
};
export default Footercomp;