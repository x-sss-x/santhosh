import { createAsyncThunk, createSlice
 } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

interface Service {
  id: string;
  type: string;
  date: string;
}

interface InitialStateProps {
  services: Service[];
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: InitialStateProps = {
  services: [],
  isLoading: false,
  error: null,
};


export const fetchServices = createAsyncThunk<any,void, { rejectValue: { msg: string } }>(
    "/booking/fetchServices",
    async (_payload, { fulfillWithValue, rejectWithValue }) => {
      try {
        const response = await SupaClient.from("service").select("*");
        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong!" });
      }
    }
  );
  export const bookService = createAsyncThunk<any, { serviceId: string, serviceProviderId: string, customerId: string, date: string, time: string ,reason:string }, { rejectValue: { msg: string } }>(
    "/booking/bookservice",
    async (payload, { fulfillWithValue, rejectWithValue }) => {
      try {    
        const response = await SupaClient.from("request").insert({
          service_id: payload.serviceId,
          serviceprovider_id: payload.serviceProviderId,
          customer_id: payload.customerId,
          date: payload.date,
          time: payload.time,
          reasons_for_rejecting:payload.reason
        });
  
        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong!" });
      }
    }
  );
  

export const booking = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, { payload }) => {
        state.services = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchServices.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      })
      .addCase(bookService.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(bookService.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(bookService.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      });
  },
});

export default booking.reducer;
