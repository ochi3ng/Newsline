import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { FetchData } from './counterAPI';

type News={
  results: any[]
}
export interface CounterState {
  data: News;
  status: 'idle' | 'loading' | 'failed' | 'pending';
}

const initialState: CounterState = {
    data:{
      results: [],
    },
  status: 'pending',
};


export const getPost = createAsyncThunk(
  'counter/fetchData',
  async () => {
    const response = await FetchData();
  
    return response;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data.results = action.payload.results;
        
      })
      .addCase(getPost.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
export const selectCount = (state: RootState) => state.counter.data;

export default counterSlice.reducer;
