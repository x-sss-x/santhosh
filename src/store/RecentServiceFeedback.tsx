import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SupaClient } from "../../utils/supabase";
import { Decimal } from '@prisma/client/runtime';


interface InitialStateProps {
    searchResults: Feedback[];
    isLoading: boolean;
    error: string | null;
  }
  
  interface Feedback {
    rating: Decimal;
    review_content: string;
  }
  
  const initialState: InitialStateProps = {
    searchResults: [],
    isLoading: false,
    error: null,
  };
  
  export const searchSlice = createSlice({
      name: 'search',
      initialState,
      reducers: {},
      extraReducers: (builder) => {
        builder.addCase(searchService.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(searchService.fulfilled, (state, action) => {
            state.isLoading = false;
            state.searchResults = action.payload;
          })
          builder.addCase(searchService.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
          });
      },
    });
  
    export const searchService = createAsyncThunk(
      'searchService/search',
      async (searchQuery: string, { rejectWithValue }) => {
        try {
          const response = await SupaClient.from('review')
            .select('*,review(review_content)')
            .order("created at",)

    
          const data = response.data ? response.data.map((item: any) => ({
            id: item.rating,
            name: item.review_content,
          })) as Feedback[] : [];
    
          return data;
        } catch (error) {
          return rejectWithValue({ msg: 'Something went wrong!' });
        }
      }
    );
    