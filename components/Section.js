import React, { Fragment, useEffect, useRef } from 'react';

export default function Section({ cls, children }) {
    const img = useRef(null);
    const onScroll = () => {
        let top = img.current.parentElement.getBoundingClientRect().top;
        img.current.style.top = -top * 0.3 + 'px';
    };
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        window.addEventListener('load', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('load', onScroll);
        };
    });
    return (
        <Fragment>
            <section className={'paralex ' + cls}>
                <div className='paralex-img' ref={img}></div>
                <div className='paralex-cover'>{children}</div>
            </section>
            <div className='filler'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
            </div>
        </Fragment>
    );
}
