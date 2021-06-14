import { createSlice } from '@reduxjs/toolkit';

const daysOptions:{name: string; initialState: string, reducers: any} = {
    name: 'days',
    initialState: '',
    reducers: {
        setDay: (state:string, action:{type: string; payload?:string}):string => {
            return action.payload;
        },
        clearDay: (state:string, action:{type: string; payload?:string}):string => {
            return '';
        }
    }
}



export const daysSlice = createSlice(daysOptions);

