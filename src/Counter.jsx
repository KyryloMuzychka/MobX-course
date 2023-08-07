import React from 'react';
import counter from './store/counter';
import { observer } from 'mobx-react-lite';

const Counter = observer ( () => {
    return (
        <div className='wrapper__counter'>
            <div className="counter">
                <h1>{counter.total}</h1>
                <div className="btns">
                    <button className='btn' onClick={() => counter.increment()}>+</button>
                    <button className='btn' onClick={() => counter.decrement()}>-</button>
                </div>
            </div>            
        </div>
    );
})

export default Counter;