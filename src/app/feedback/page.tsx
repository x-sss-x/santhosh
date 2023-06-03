"use client";
import React, { useEffect , useCallback, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
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

  const dispatch = useAppDispatch();
  const params = useParams();
  const params1 = useParams();
  

  
  useEffect(() => {
    fetchUsername();
    fetchUsername2();
    viewFeedback();

  }, []);


  
  const fetchUsername2 = useCallback(async () => {
    const response = await SupaClient.from("service")
      .select("service_name")
      .eq("id", params.service_id)
      .single();
    setUsername(response.data?.service_name);
  }, [params.service_id]);

  const fetchUsername = useCallback(async () => {
    const response = await SupaClient.from("customer")
      .select("customer_name")
      .eq("id", params.customer_id)
      .single();
    setUsername(response.data?.customer_name);
  }, [params.customer_id]);


  const handleSubmit = () => {
    if (content) {
      dispatch(
        storeFeedback({
          content,
          rating,
          service_id: params1.service_id, 
          customer_id: params.cutomer_id, 
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

      

      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={isPosting}>
          {isPosting ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
};

export default Page;
