import ExpensesDate from './ExpensesDate';
import './ExpensesItem.css';

function ExpensesItem (props){
    return(
        <div className='expenses-item'>
            <ExpensesDate date={props.date}/>
            <div className='expenses-item__description'>
                <h2> {props.title} </h2>
                <div className='expenses-item__price'> ${props.amount} </div>
            </div>
        </div>
    );
}

export default ExpensesItem;