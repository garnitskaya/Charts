import InputItem from '../inputItem/InputItem';
import './inputBlock.css';

const InputBlock = ({ labels, data, onBlurData, onBlurLabels, onKeyDownData, onKeyDownLabels }) => {

    const inputItems = [
        { name: 'labels', label: 'X axis labels:', value: labels, onKeyDown: onKeyDownLabels, onBlur: onBlurLabels },
        { name: 'data', label: 'Y axis values:', value: data, onKeyDown: onKeyDownData, onBlur: onBlurData }
    ];

    const renderItems = inputItems.map(item => <InputItem key={item.name} {...item} />);

    return (
        <div className='input-block'>
            {renderItems}
        </div>
    );
};

export default InputBlock;