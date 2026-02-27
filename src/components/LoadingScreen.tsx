'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHidden(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
            <div className="loading-heart">
                <svg viewBox="0 0 24 24" fill="none" stroke="#ce2121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </div>
        </div>
    );
}
