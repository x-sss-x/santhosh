import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { fetchServices, bookService } from "../../store/BookServiceProvider.slice";

const BookingPage: React.FC = () => {
  const dispatch = useDispatch();
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
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <h3>{service.type}</h3>
                <p>Date: {service.date}</p>
                <button
                  onClick={() =>
                    handleBookService(service.id, "serviceProviderId", "customerId", "date", "time", "reason")
                  }
                >
                  Book Service
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
