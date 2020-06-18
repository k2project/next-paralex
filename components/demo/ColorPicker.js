import React, { useState, Fragment } from 'react';

export default function ColorPicker() {
    const colors = [
        '435d77',
        '1e2b38',
        '282b33',
        '2f2f2f',
        '323537',
        '444750',
        '333533',
        '24292e',
    ];
    const changeColor = (color) => {
        document.body.classList = 'c-' + color;
    };
    const [colorPicker, showColorPicker] = useState(false);

    return (
        <Fragment>
            <div
                className='color-box'
                onClick={() => showColorPicker(true)}
            ></div>
            {colorPicker && (
                <ul className='color-picker'>
                    <p>
                        <b onClick={() => showColorPicker(false)}>&times;</b>
                    </p>
                    {colors.map((color) => (
                        <li key={color}>
                            <span
                                style={{ backgroundColor: '#' + color }}
                                onClick={() => changeColor(color)}
                            ></span>
                            {color}
                        </li>
                    ))}
                </ul>
            )}
        </Fragment>
    );
}
