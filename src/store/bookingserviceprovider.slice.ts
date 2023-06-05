import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SupaClient } from "../../utils/supabase";

interface InitialStateProps {
  searchResults: any[];
  isLoading: boolean;
  error: string | null | undefined;
  success: string | null | undefined;
}

interface Service {
  id: number,
  serviceType: string,
  booking_id: string,
  date: Date,
  serviceproviderid: string,
  customerid: string,
  serviceid: string, 
  requestid:string,
  providerstatus:string,
  cancelreason:string;
}

interface ServiceProps extends Omit<Service,'id '| 'providerstatus' | 'cancelreason' | 'serviceType' | 'requestid'  >

const initialState: InitialStateProps = {
  searchResults: [],
  isLoading: false,
  error: null,
  success: null,
};

export const bookingService = createSlice({
    name: 'bookingServiceProvider',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(listServices.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        builder.addCase(listServices.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.searchResults = payload;
        })
        builder.addCase(listServices.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload?.msg;
        });

        builder.addCase(viewserviceprovider.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(viewserviceprovider.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.searchResults = payload;
          })
          builder.addCase(viewserviceprovider.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });

          builder.addCase(loadReviews.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(loadReviews.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.searchResults = payload;
          })
          builder.addCase(loadReviews.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });

          builder.addCase(loadRequest.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(loadRequest.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.success = payload?.msg;
          })
          builder.addCase(loadRequest.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });



          builder.addCase(retrieveRequests.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(retrieveRequests.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.searchResults = payload;
          })
          builder.addCase(retrieveRequests.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });

          builder.addCase(respondToRequest.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(respondToRequest.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.success = payload?.msg;
          })
          builder.addCase(respondToRequest.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });

          builder.addCase(cancelRequest.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(cancelRequest.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.success = payload?.msg;
          })
          builder.addCase(cancelRequest.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });


    },
  });

export const listServices = createAsyncThunk<
  any,
  {serviceType:string},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/bookingServiceProvider/listServices",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('Serviceprovider ')
        .select('*').eq('service_name', payload.serviceType ); 

        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong !" });
      }          
      }
  );

  export const viewserviceprovider = createAsyncThunk<
  any,
  {id:string},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/bookingServiceProvider/viewserviceprovider",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('Serviceprovider ')
        .select('*').eq('serviceprovider_id', payload.id ); 

        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong !" });
      }          
      }
  );

  export const loadReviews = createAsyncThunk<
  any,
  {id:string},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/bookingServiceProvider/loadReviews",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('review')
        .select('*').eq('serviceprovider_id', payload.id ); 

        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "No ReviewS yet for the service provider!" });
      }          
      }
  );

  export const loadRequest = createAsyncThunk<
  any,
  ServiceProps,
  {
    rejectValue: {
      msg: string;
    };
  }
>("/bookingServiceProvider/loadRequest",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('request')
        .insert({reasons_for_rejecting: '-', date:"2023-08-5", serviceprovider_id: payload.serviceproviderid, customer_id: payload.customerid, service_id: payload.serviceid  })

        const data = response.data;
        return fulfillWithValue({ msg: "Request Added  Successfully" });
        //dispatch(listServices({service_name:  Service.serviceType}));
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong!" });
      }          
      }
  );


  export const retrieveRequests = createAsyncThunk<
  any,
  {id:string},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/bookingServiceProvider/retrieveRequests",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('requests')
        .select('*').eq('serviceprovider_id', payload.id ); 

        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "No ReviewS yet for the service provider!" });
      }          
      }
  );

  export const respondToRequest = createAsyncThunk<
  any,
  {id:string,
    providerstatus:string},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/bookingServiceProvider/respondToRequest",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('requests')
        .update({ status: payload.providerstatus })
        .eq('booking_id ', payload.id) 

        const data = response.data;
        return fulfillWithValue({ msg: "Service Updated Successfully!" });
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong!" });
      }          
      }
  );

  export const cancelRequest = createAsyncThunk<
  any,
  {
    requestid:string,
   cancelreason:string},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/bookingServiceProvider/cancelRequest",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('requests')
        .update({ status: 'CANCELLED' , reasons_for_rejecting : payload.cancelreason})
        .eq('booking_id ', payload.id) 

        const data = response.data;
        return fulfillWithValue({ msg: "Service Cancelled Successfully!" });
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong!" });
      }          
      }
  );