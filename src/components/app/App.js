import { useState, useEffect } from 'react';
import { useInputWithData } from './../../hooks/useInputWithData';
import ChartItem from '../chartItem/ChartItem';
import InputBlock from '../inputBlock/InputBlock';
import TypeBlock from './../typeBlock/TypeBlock';
import Spinner from './../spinner/Spinner';
import './app.css';

const App = () => {
    const [type, setType] = useState(localStorage.getItem('type') || 'bar');
    const [loading, setLoading] = useState(false);
    const inputX = useInputWithData(['Jun', 'Jul', 'Aug'], 'labels');
    const inputY = useInputWithData([5, 6, 7], 'data');

    useEffect(() => {
        localStorage.setItem('data', inputY.value);
        localStorage.setItem('labels', inputX.value);
        localStorage.setItem('type', type);
    }, [inputY.value, inputX.value, type]);

    useEffect(() => {
        setLoading(false);
        setType(type);
    }, [type, loading]);

    const onChangeType = (type) => {
        setLoading(true);
        setType(type);
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <ChartItem data={inputY.value} labels={inputX.value} type={type} /> : null;

    return (
        <div className='app'>
            <InputBlock
                labels={inputX.value}
                data={inputY.value}
                onBlurData={inputY.onBlur}
                onBlurLabels={inputX.onBlur}
                onKeyDownData={inputY.onKeyDown}
                onKeyDownLabels={inputX.onKeyDown} />

            {content}
            {spinner}

            <TypeBlock
                type={type}
                onChangeType={onChangeType} />
        </div>
    )
};

export default App;