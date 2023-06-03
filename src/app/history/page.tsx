"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices, searchServicesByType, searchServicesByDate } from "../../store/ServiceHistory.slice";
import { RootState } from "../../store";

const PageComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state: RootState) => state.ServiceHistory);

  useEffect(() => {
    dispatch(fetchServices({ customer_id: "nnn" }) as any);
    dispatch(searchServicesByType({ type: "enim" }) as any);
    dispatch(searchServicesByDate({}) as any);
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}

      {error && <div>Error: {error}</div>}

      {data.map((service) => (
        <div key={service.id}>
          <span>Type: {service.type}</span>
          <span>Date: {service.date}</span>
        </div>
      ))}
    </div>
  );
};

export default PageComponent;
