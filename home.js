import { createComponent } from "./commoncomponent.js";

export default function homePage() {
    return createComponent({
        backgroundImage: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ac/1c/ce/idly-dosa-and-vada.jpg?w=900&h=-1&s=1",
        h1Text: "Food you Love",
        h3Text: "multi cusine",
        h3Text: "Food is Love",
        buttonText: "Click Me",
    });
}