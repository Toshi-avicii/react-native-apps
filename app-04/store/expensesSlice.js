import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dummyExpenses: [
        {
            id: 'e1',
            description: 'A pair of shoes',
            amount: 15.88,
            date: new Date('2022-02-14').getTime() / 1000
        },
        {
            id: 'e2',
            description: 'Trousers',
            amount: 25.99,
            date: new Date('2022-02-27').getTime() / 1000
        },
        {
            id: 'e3',
            description: 'A Shirt',
            amount: 6.99,
            date: new Date('2023-01-14').getTime() / 1000
        },
        {
            id: 'e4',
            description: 'Toys',
            amount: 9.99,
            date: new Date('2023-02-12').getTime() / 1000
        },
        {
            id: 'e5',
            description: 'Football',
            amount: 34.99,
            date: new Date().getTime() / 1000
        }
    ]
}

const expensesSlice = createSlice({
    name: 'expensesSlice',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const id = new Date().toString() + Math.random().toString();
            state.dummyExpenses.push({
                ...action.payload,
                id
            });
        },
        removeExpense: (state, action) => {
            const newState = state.dummyExpenses.filter((item) => {
                return item.id !== action.payload.id
            });

            state.dummyExpenses = newState;
        },

        updateExpense: (state, action) => {
            // console.log(action.payload.id);
            // state.dummyExpenses.filter((item) => {
            //     const restExpenses = item.id !== action.payload.id;
            //     const foundedExpense = item.id === action.payload.id;
            //     console.log(foundedExpense);
            //     // foundedExpense.amount = action.payload.amount;
            //     // foundedExpense.date = action.payload.date;
            //     // foundedExpense.description = action.payload.description;
            // });

            const index = state.dummyExpenses.findIndex(expense => expense.id === action.payload.id);
            
            if(index !== -1) {
                state.dummyExpenses[index].amount = action.payload.amount;
                state.dummyExpenses[index].description = action.payload.description;
                state.dummyExpenses[index].date = action.payload.date;
            }

            // state.dummyExpenses = newState;
        }
    }
});

export const { addExpense, removeExpense, updateExpense } = expensesSlice.actions;
export default expensesSlice.reducer;