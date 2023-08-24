import style from './Grid.module.css';

function Grid({myClass = "", children, checkWide = true}){

    return (
        <div className={`${style.grid} ${checkWide ? style.wide : ""} ${myClass}`}>
            {children}       
        </div>
    );
};

export default Grid;