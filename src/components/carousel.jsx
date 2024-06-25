import { Carousel } from "@material-tailwind/react";
import photo1 from "../assets/english.jpg";
import smart from "../assets/smart.jpg";
import germany from "../assets/germany.jpg";
 
export function CarouselDefault() {
return (
    <Carousel className="rounded-xl">
        <img
            src={photo1}
            alt="image 1"
            className="h-full w-full object-cover"
        />
        <img
            src={photo1}
            alt="image 2"
            className="h-full w-full object-cover"
        />
        <img
            src={germany}
            alt="image 3"
            className="h-full w-full object-cover"
        />
    </Carousel>
);
}