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

export const pastHistoryOfCustomer = createAsyncThunk<any,void, { rejectValue: { msg: string } }>(
  "/ServiceHistory/pastHistoryOfCustomer",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("history").select("*,service(service_name)")
      .eq("customer_id","0a1bf16b-4eed-445b-9e03-a5cef2f8bf0c")
      .order("date", { ascending: false });

      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong!" });
    }
  }
);


export const pastHistoryOfServiceProvider = createAsyncThunk<any,void, { rejectValue: { msg: string } }>(
  "/ServiceHistory/pastHistoryOfServiceProvider",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("history").select("*,service(service_name)")
      .eq("serviceprovider_id","0c1c000c-2f45-4b87-bebf-e6e2d2303b31")
      .order("date", { ascending: false });

      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong!" });
    }
  }
);




export const serviceProviderHistoryOfToday = createAsyncThunk<any,void, { rejectValue: { msg: string } }>(
  "/ServiceHistory/serviceProviderHistoryOfToday",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
 
      const response = await SupaClient.from("history").select("service(service_name)")
      .eq("serviceprovider_id","c68316b0-7f3c-4ad4-b1a1-e2516d33f458")
      .gte("date","CURRENT_DATE")

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
      .addCase(pastHistoryOfCustomer.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(pastHistoryOfCustomer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      })
      .addCase(pastHistoryOfCustomer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(pastHistoryOfServiceProvider.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(pastHistoryOfServiceProvider.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      })
      .addCase(pastHistoryOfServiceProvider.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(serviceProviderHistoryOfToday.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(serviceProviderHistoryOfToday.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      })
      .addCase(serviceProviderHistoryOfToday.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
  },
});

export default ServiceHistory.reducer;
