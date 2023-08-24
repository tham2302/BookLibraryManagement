import style from './Row.module.css';

function Row({children, myClass = ""}){
    return (
        <div className={`${style.row} ${myClass}`}>{children}</div>
    );
};

export default Row;