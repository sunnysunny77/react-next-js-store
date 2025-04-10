import Link from "next/link";

const Condition = (props) => {

    const { link, classes, onClick, data_value, children } = props;

    return link ? <Link className={classes} onClick={onClick} data-value={data_value} href="/store"> {children} </Link> : <div className={classes} onClick={onClick} data-value={data_value}> {children} </div>;
}

export default Condition;
