import TypeItem from '../typeItem/TypeItem';
import './typeBlock.css';

const TypeBlock = ({ onChangeType, type }) => {
    const chartItems = [
        { value: 'bar', label: 'Bar' },
        { value: 'line', label: 'Line' },
        { value: 'pie', label: 'Pie' },
    ];

    const renderItems = chartItems.map(({ value, label }) =>
        <TypeItem
            key={value}
            onChange={() => onChangeType(value)}
            value={value}
            label={label}
            type={type}
        />
    );

    return (
        <div className='type-block'>
            {renderItems}
        </div>
    );
};

export default TypeBlock;