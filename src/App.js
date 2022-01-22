import ExpensesItem from "./components/ExpensesItem";

function App(props){
    const expenses = [
        {id: 'e1', title: 'Rice', amount: '120', date: new Date(2022, 1, 5)},
        {id: 'e2', title: 'Bean', amount: '105', date: new Date(2022, 1, 4)},
        {id: 'e3', title: 'Semo', amount: '111', date: new Date(2022, 1, 2)},
        {id: 'e4', title: 'Garri', amount: '110', date: new Date(2021, 11, 31)},
        {id: 'e5', title: 'Yam', amount: '100', date: new Date(2021, 11, 25)},
        {id: 'e6', title: 'Elubo', amount: '220', date: new Date(2021, 11, 24)},
        {id: 'e7', title: 'Wheat', amount: '180', date: new Date(2020, 10, 5)},
        {id: 'e8', title: 'Flour', amount: '150', date: new Date(2020, 9, 25)},
        {id: 'e9', title: 'Bagget', amount: '140', date: new Date(2019, 11, 31)},
        {id: 'e10', title: 'Indomie', amount: '250', date: new Date(2018, 10, 26)},
    ];
    return(
        <div className='items'>
            <h1>This is my first Assignment</h1>
            <ExpensesItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpensesItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpensesItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            <ExpensesItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
            <ExpensesItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} />
            <ExpensesItem title={expenses[5].title} amount={expenses[5].amount} date={expenses[5].date} />
            <ExpensesItem title={expenses[6].title} amount={expenses[6].amount} date={expenses[6].date} />
            <ExpensesItem title={expenses[7].title} amount={expenses[7].amount} date={expenses[7].date} />
            <ExpensesItem title={expenses[8].title} amount={expenses[8].amount} date={expenses[8].date} />
            <ExpensesItem title={expenses[9].title} amount={expenses[9].amount} date={expenses[9].date} />
            
        </div>
    );
}

export default App;