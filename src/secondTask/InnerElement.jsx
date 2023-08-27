import { useEffect, useLayoutEffect } from "react"

export const InnerElement = () => {
    
    const rCB = (element) => {
        console.log('6')
    }

    console.log('9');
    
    useLayoutEffect(() => {
        console.log('7')
    }, [])

    useEffect(() => {
        console.log('8')
    }, []);

	return <div ref={rCB}></div>;
}