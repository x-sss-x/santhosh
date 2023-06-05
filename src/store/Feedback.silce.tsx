import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const viewFeedback = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/feedback/viewFeedback",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("review")
        .select("review_content,rating,Customer(customer_id,customer_name)")
        .limit(10).order("created_at",{ascending:false})
      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);

export const storeFeedback = createAsyncThunk<
  any,
  {
    content: string;
    rating: number;
    service_id: string;   
    customer_id: string;   

  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/feedback/storeFeedback",
  async (payload, { fulfillWithValue, rejectWithValue,dispatch }) => {
    try {
      const response = await SupaClient.from("review")
        .insert({
          review_content: 'agdjjhcjhavjcvjjv', //payload.content,
          customer_id: "e238207a-b30e-49e3-8d69-f7e6848fe813", //payload.customer_id,
          rating:1 ,
          service_id:"48da29e7-1f9e-448f-b7b2-6557dffd6387" 
        })
        .select("review_content,rating,Customer(customer_name)")
        .single();
      const data = response.data;
      dispatch(viewFeedback());
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);

interface InitialStateProps {
  isLoading: boolean;
  error: null | string | undefined;
  data: any[];
  isPosting: boolean;
}

const initialState: InitialStateProps = {
  data: [],
  isLoading: false,
  error: null,
  isPosting: false,
};

export const feedbackSclice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(viewFeedback.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(viewFeedback.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(viewFeedback.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });

    builder.addCase(storeFeedback.fulfilled, (state, { payload }) => {
      state.data.push(payload);
      state.isPosting = false;
      state.error = null;
    });
    builder.addCase(storeFeedback.pending, (state) => {
      state.isPosting = true;
      state.error = null;
    });
    builder.addCase(storeFeedback.rejected, (state, { payload }) => {
      state.isPosting = false;
      state.error = payload?.msg;
    });
  },
});