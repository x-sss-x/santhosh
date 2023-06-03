import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const viewFeedBack = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/feedback/viewFeedBack",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("review")
      .select("*,customer(customer_name)")
      .order("created at")
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
    id: string;
    content: string;
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
      const response = await SupaClient.from("comments")
        .insert({
          content: payload.content,
          usersId: payload.id,
        })
        .select("*,customer(customer_name)")
        .single();
      const data = response.data;
      dispatch(viewFeedBack());
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

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(viewFeedBack.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(viewFeedBack.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(viewFeedBack.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.msg;
    });

    builder.addCase(storeFeedback.fulfilled, (state, { payload }) => {
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