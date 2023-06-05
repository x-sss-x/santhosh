import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchService.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(searchService.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchResults = payload;
    });
    builder.addCase(searchService.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });
    builder.addCase(searchAllServices.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });
    builder.addCase(searchAllServices.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchResults = payload;
    });
    builder.addCase(searchAllServices.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(searchRecentServices.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(searchRecentServices.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchResults = payload;
    });
    builder.addCase(searchRecentServices.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });
    builder.addCase(SearchByFeedback.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });
    builder.addCase(SearchByFeedback.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchResults = payload;
    });
    builder.addCase(SearchByFeedback.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
  },
});

export const searchService = createAsyncThunk<
  any,
  { searchQuery: string },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/search/searchService",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("service")
        .select("service_name")
        .ilike("service_name", `%${payload.searchQuery}%`);

      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);

export const searchAllServices = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/search/searchAllServices",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("service").select("service_name");

      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);

export const searchRecentServices = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/search/searchRecentServices",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("history")
        .select("date,service(service_name)")
        .in("customer_id",["e8e4dd2a-cfdf-44ae-914d-e217366808b4"])
        
      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);

export const SearchByFeedback = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/search/SearchByFeedback",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("review")
        .select("service(service_name),rating")
        .order("rating",{ascending:false})


      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);
