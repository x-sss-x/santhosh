import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

interface Service {
  id: string;
  type: string;
  date: string;
}

interface InitialStateProps {
  data: Service[];
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: InitialStateProps = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchServices = createAsyncThunk<any, { customer_id: string }, { rejectValue: { msg: string } }>(
  "/ServiceHistory/fetchServices",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("history").select("*");

      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong!" });
    }
  }
);

export const searchServicesByDate = createAsyncThunk<any, {}, { rejectValue: { msg: string } }>(
  "/ServiceHistory/searchServicesByDate",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("history").select("*").order("date", { ascending: false });

      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong!" });
    }
  }
);

export const searchServicesByType = createAsyncThunk<any, { type: string }, { rejectValue: { msg: string } }>(
  "/ServiceHistory/searchServicesByType",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("history").
      select("*,Customer(customer_name)").eq("service_name", payload.type);
      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong!" });
    }
  }
);

export const ServiceHistory = createSlice({
  name: "ServiceHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchServices.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      })
      .addCase(searchServicesByType.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchServicesByType.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(searchServicesByType.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      })
      .addCase(searchServicesByDate.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(searchServicesByDate.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      })
      .addCase(searchServicesByDate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
  },
});

export default ServiceHistory.reducer;
