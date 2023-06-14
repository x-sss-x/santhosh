import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SupaClient } from "../../utils/supabase";

interface InitialStateProps {
  data: any [];
  isLoading: boolean;
  error: string | null | undefined;
}

interface Profile {
    customer_id: string,
    serviceprovider_id: string
    
    // MNETION YOUR ACTOR ATTRIBUTES / PROPERTIES HERE
    
}

const initialState: InitialStateProps = {
  data: [],
  isLoading: false,
  error: null,
};

export const Profile = createSlice({
    name: 'Profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
        builder.addCase(CustomerRetrieveFilter.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        builder.addCase(CustomerRetrieveFilter.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.data = payload;
        })
        builder.addCase(CustomerRetrieveFilter.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload?.msg;
        });
        builder.addCase(ServiceProviderRetrieveFilter.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        builder.addCase(ServiceProviderRetrieveFilter.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.data = payload;
        })
        builder.addCase(ServiceProviderRetrieveFilter.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload?.msg;
        });
        builder.addCase(CustomerUpdateProfile.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(CustomerUpdateProfile.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.data = payload;
          })
          builder.addCase(CustomerUpdateProfile.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });
          builder.addCase(ServiceproviderUpdateProfile.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(ServiceproviderUpdateProfile.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.data = payload;
          })
          builder.addCase(ServiceproviderUpdateProfile.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload?.msg;
          });
    },
  });

  export const CustomerRetrieveFilter = createAsyncThunk<
  any,
  { id:string,
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>("/Profile/CustomerRetrieveFilter",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('Customer')//INSTEAD OF "user_profile" entity mention your user entity name
        .select("*")
        .eq("id", payload.customer_id)
        
        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "No records found" });
      }          
      }
  );



  export const ServiceProviderRetrieveFilter = createAsyncThunk<
  any,
  { id:string,
  },
  {
    rejectValue: {
      msg: string;
    };
  }
>("/Profile/ServiceProviderRetrieveFilter",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('Serviceprovider')//INSTEAD OF "user_profile" entity mention your user entity name
        .select("*")
        .eq("id", payload.serviceprovider_id)
        
        const data = response.data;
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "No records found !" });
      }          
      }
  );



  export const CustomerUpdateProfile = createAsyncThunk<
  any,
  {
    id: string,
},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/Profile/CustomerUpdateProfile",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('Customer')
        .update({ name:payload.customer_name, phone_no: payload.phone_number}) //LIST ALL THE ATTRIBUTES TO BE UPDATED HERE
        .eq('id', payload.customer_id)
        .select() 

        const data = response.data;
        return fulfillWithValue({ msg: "Your Profile updated Successfully!" });

      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong!" });
      }          
      }
  );


  

  export const ServiceproviderUpdateProfile = createAsyncThunk<
  any,
  {
    id: string,
},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/Profile/ServiceproviderUpdateProfile",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('Serviceprovider')
        .update({ name:payload.serviceprovider_name, phone_no: payload.phone_number}) //LIST ALL THE ATTRIBUTES TO BE UPDATED HERE
        .eq('id', payload.serviceprovider_id)
        .select() 

        const data = response.data;
        return fulfillWithValue({ msg: "Your Profile updated Successfully!" });

      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong!" });
      }          
      }
  );