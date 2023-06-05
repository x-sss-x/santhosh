"use client";
import React, { useEffect , useCallback, useState} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../../../hooks";
import { viewFeedback, storeFeedback } from "../../store/Feedback.silce";
import { useParams } from "next/navigation";
import { SupaClient } from "../../../utils/supabase";


const Page: React.FC = () => {
  const feedbackData = useSelector((state: RootState) => state.feedback.data);
  const isLoading = useSelector((state: RootState) => state.feedback.isLoading);
  const isPosting = useSelector((state: RootState) => state.feedback.isPosting);
  const error = useSelector((state: RootState) => state.feedback.error);
  const [content, setContent] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [username, setUsername] = useState<undefined | string>(undefined);
  const [service_id, setService_id] = useState<undefined | string>("");

  const dispatch = useAppDispatch();
  const customer_id="c68316b0-7f3c-4ad4-b1a1-e2516d33f458"
  
const selected_service="enim"
useEffect(()=>{
  fetchUsername()
  fetchService()
},[])

  const fetchService = useCallback(async () => {
    const response = await SupaClient.from("service")
      .select("service_id")
      .in("service_name", [selected_service]);
    if (response.data && response.data.length > 0) {
      setService_id(response.data[0].service_id);
    }
  }, [selected_service]);
  
  

  const fetchUsername = useCallback(async () => {
    const response = await SupaClient.from("Customer")
      .select("customer_name")
      .eq("id", customer_id)
      .single();
    setUsername(response.data?.customer_name);
  }, [customer_id]);

 

  // ...
  
  const handleSubmit = () => {
    if (content) {
      dispatch(
        storeFeedback({
          content,
          rating,
          service_id: service_id || "", 
          customer_id: customer_id, 
        })
      );
      setContent("");
      setRating(0);
    }
  };
  
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      

      <form >
        <div>
          <label htmlFor="content">Content</label>
          <input
            type="text"
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
          />
        </div>
        <button type="submit" disabled={isPosting} onClick={handleSubmit}>
          {isPosting ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
};

export default Page;
