import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SupaClient } from "../utils/supabase";

interface InitialStateProps {
  searchResults: Service[];
  isLoading: boolean;
  error: string | null;
}

interface Service {
  id: number;
  name: string;
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
        const response = await SupaClient.from('service')
          .select('*,service(service_name)')
          .limit(10)
          .order('created_at', { ascending: false })
          .ilike('service_name', `%${searchQuery}%`);
  
        const data = response.data;
        return data;
      } catch (error) {
        return rejectWithValue({ msg: 'Something went wrong!' });
      }
    }
  );
  


