import React, { useEffect } from 'react';
export const Arr = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            serverAnswer();
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);
    return (<div>
        Hello, World
    </div>);
};
