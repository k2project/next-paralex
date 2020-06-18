import React, { useState } from 'react';

export default function Input({ init }) {
    const [text, setText] = useState('Not feeling YOU?');
    return (
        <input
            type='text'
            defaultValue={init}
            onChange={(e) => setText(e.target.value)}
        />
    );
}
