import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const FeedbackThunk = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/Feedback/RecentServiceFeedback",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("customer")
        .select("*,customer(customer_name)");
      const data = response.data;
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);

export const postFeedBack = createAsyncThunk<
  any,
  {
    rating: number;
    content: string;
    customer_id: string;
    review_id: string;
    service_id: string;
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/RecentServiceFeedback/feedback",
  async (payload, { fulfillWithValue, rejectWithValue,dispatch }) => {
    try {
      const response = await SupaClient.from("review")
        .insert({
          customer_id:payload.customer_id,
          review_id:payload.review_id,
          review_content: payload.content,
          service_id:payload.service_id,
          rating: payload.rating,
        })
        .select("*,customer(customer_name)")
        .single();
      const data = response.data;
      dispatch(FeedbackThunk());
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
  name: "feedbacks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FeedbackThunk.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(FeedbackThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(FeedbackThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });

    builder.addCase(postFeedBack.fulfilled, (state, { payload }) => {
      state.isPosting = false;
      state.error = null;
    });
    builder.addCase(postFeedBack.pending, (state) => {
      state.isPosting = true;
      state.error = null;
    });
    builder.addCase(postFeedBack.rejected, (state, { payload }) => {
      state.isPosting = false;
      state.error = payload?.msg;
    });
  },
});