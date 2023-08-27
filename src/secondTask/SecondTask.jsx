import { useEffect, useLayoutEffect } from 'react';
import { InnerElement } from './InnerElement';

export const SecondTask = () => {

    const rCB = (element) => {
        console.log('1')
    }

    console.log('3');
    
    useLayoutEffect(() => {
        console.log('5')
    }, [])

    useEffect(() => {
        console.log('2')
    }, []);
    return <div ref={rCB}>
        <InnerElement />
    </div>;
};
