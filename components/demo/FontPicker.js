import React, { useState, Fragment, useEffect } from 'react';

export default function FontPicker() {
    const [fontPicker, showFontPicker] = useState(false);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        Array.from(document.querySelectorAll('li.weight')).forEach((el) => {
            el.classList.remove('active');
            if (
                el.textContent ===
                document.querySelector('.home-top input').style.fontWeight
            )
                el.classList.add('active');
        });
        Array.from(document.querySelectorAll('li.font')).forEach((el) => {
            el.classList.remove('active');
            const cls = el.textContent.toLowerCase().split(' ').join('-');
            if (document.querySelector('main').classList.contains(cls))
                el.classList.add('active');
        });
        if (fontPicker && !clicked) {
            document
                .querySelector('li.weight:last-child')
                .previousElementSibling.classList.add('active');
            document.querySelector('li.font').classList.add('active');
        }
    }, [fontPicker]);
    const fonts = [
        'Segoe UI',
        'Josefin Sans',
        'Merriweather Sans',
        'Fira Sans',
    ];
    const changeFont = (font) => {
        document.querySelector('main').classList = font
            .toLowerCase()
            .split(' ')
            .join('-');
    };
    const weights = [100, 200, 300, 400, 500, 600];

    const setActiveClass = (selector, target) => {
        Array.from(document.querySelectorAll(selector)).forEach((el) =>
            el.classList.remove('active')
        );
        target.parentElement.classList.add('active');
    };
    return (
        <Fragment>
            <div
                className='font-box'
                onClick={() => showFontPicker(true)}
            ></div>
            {fontPicker && (
                <ul className='font-picker'>
                    <p>
                        <b onClick={() => showFontPicker(false)}>&times;</b>
                    </p>
                    {fonts.map((font) => (
                        <li key={font} className='font'>
                            <span
                                onClick={(e) => {
                                    changeFont(font);
                                    setActiveClass('li.font', e.target);
                                    setClicked(true);
                                }}
                            >
                                {font}
                            </span>
                        </li>
                    ))}
                    {weights.map((weight) => (
                        <li key={weight} className='weight'>
                            <span
                                onClick={(e) => {
                                    document.querySelector(
                                        '.home-top input'
                                    ).style.fontWeight = weight;
                                    setActiveClass('li.weight', e.target);
                                    setClicked(true);
                                }}
                            >
                                {weight}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </Fragment>
    );
}
