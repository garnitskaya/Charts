import './typeItem.css';

const TypeItem = ({ value, label, onChange, type }) => {
    return (
        <div className='type-item'>
            <input
                className='type-item__input'
                onChange={onChange}
                id={value} type="radio"
                name='type' value={value}
                checked={type === value} />
            <label
                className='type-item__label'
                htmlFor={value}>
                {label} Chart
            </label>
        </div>
    );
};

export default TypeItem;