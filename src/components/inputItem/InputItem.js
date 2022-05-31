import './inputItem.css';

const InputItem = ({ name, value, onKeyDown, onBlur, label }) => {
    return (
        <div className='item'>
            <label
                className='item__label'
                htmlFor={name}>
                {label}
            </label>
            <input
                className='item__input'
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                id={name}
                type="text"
                name={name}
                defaultValue={value}
                placeholder='enter data' />
        </div>
    );
};

export default InputItem;