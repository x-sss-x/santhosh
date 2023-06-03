import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SupaClient } from "../../utils/supabase";

interface InitialStateProps {
  searchResults: Service[];
  isLoading: boolean;
  error: string | null | undefined;
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
        builder.addCase(searchService.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.searchResults = payload;
        })
        builder.addCase(searchService.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload?.msg;
        });
    },
  });

  export const searchService = createAsyncThunk<
  any,
  {searchQuery:string},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/search/searchService",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('service')
        .select('*')
        .ilike('service_name', `%${payload.searchQuery}%`); 

        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong !" });
      }          
      }
  );
  