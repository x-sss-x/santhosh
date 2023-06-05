"use client";
import React, { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../../../hooks";
import { viewFeedback, storeFeedback } from "../../store/Feedback.silce";

const Page: React.FC = () => {
  const feedbackData = useSelector((state: RootState) => state.feedback.data);
  const isLoading = useSelector((state: RootState) => state.feedback.isLoading);
  const isPosting = useSelector((state: RootState) => state.feedback.isPosting);
  const error = useSelector((state: RootState) => state.feedback.error);
  const [content, setContent] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      storeFeedback({
        content:"rgxhcvjkl",
        rating: 2.8,
        service_id: "48da29e7-1f9e-448f-b7b2-6557dffd6387",
        customer_id: "e238207a-b30e-49e3-8d69-f7e6848fe813",
      })
    );
    setContent("");
    setRating(0);
  };

  return (
    <div>
      <button disabled={isPosting} onClick={handleSubmit}>
        click
      </button>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {isPosting ? "Posting..." : "Post"}
      </div>
    </div>
  );
};

export default Page;
