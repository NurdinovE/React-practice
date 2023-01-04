import React, { useState } from 'react';

function Timer() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            Hello world
        </div>
    );
}


export default Timer