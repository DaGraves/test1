import React from 'react';

export default function IncrementButton(props) {
    
    return <button onClick={() => props.count()}>Increment</button>;
}
