"use client"
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../../../hooks";
import { fetchServices, bookService } from "../../store/BookServiceProvider.slice";

const BookingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const services = useSelector((state: RootState) => state.booking.services);
  const isLoading = useSelector((state: RootState) => state.booking.isLoading);
  const error = useSelector((state: RootState) => state.booking.error);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleBookService = (
    serviceId: string,
    serviceProviderId: string,
    customerId: string,
    date: string,
    time: string,
    reason: string
  ) => {
    dispatch(
      bookService({
        serviceId,
        serviceProviderId,
        customerId,
        date,
        time,
        reason,
      })
    );
  };
  

  return (
    <div>
      <h1>Booking Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>Available Services</h2>
          
        </div>
      )}
    </div>
  );
};

export default BookingPage;
