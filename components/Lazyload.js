import { useState, useEffect } from "react";

const Lazyload = (ref) => {

    const [isIntersecting, setIntersecting] = useState(false);    
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        ); 
        if (ref.current) {
           observer.observe(ref.current);
        }    
    }, []);    
    
    return isIntersecting;
    
}

export default Lazyload;