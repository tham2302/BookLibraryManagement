import style from './Col.module.css';

function Col({pc, table, mobie, myClass = "", children}){

    return (
        <div className={`${style.col} ${style[`l-${pc}`]} ${style[`m-${table}`]} ${style[`c-${mobie}`]} ${myClass}`}>{children}</div>
    );
};

export default Col;