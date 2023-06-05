"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../hooks";
import {
  pastHistoryOfCustomer,
  pastHistoryOfServiceProvider,
  serviceProviderHistoryOfToday,
} from "../../store/ServiceHistory.slice";
import { RootState } from "../../store";

const PageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useSelector(
    (state: RootState) => state.ServiceHistory
  );

  return (
    <div>
      <h4>Customer</h4>
      <button
        className="m-4 bg-blue-400 w-40"
        onClick={() => {
          dispatch(pastHistoryOfCustomer());
        }}
      >
        past services
      </button>
      <h4>service provider</h4>
      <button
        className="m-4 bg-blue-400 w-40"
        onClick={() => {
          dispatch(pastHistoryOfServiceProvider());
        }}
      >
        past services
      </button>
 
      <button
        className="m-4 bg-blue-400 w-40"
        onClick={() => {
          dispatch(serviceProviderHistoryOfToday());
        }}
      >
        today
      </button>
      {isLoading && <div>Loading...</div>}

      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default PageComponent;
