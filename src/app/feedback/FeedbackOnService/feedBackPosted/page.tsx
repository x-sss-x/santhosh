import Review from "@/components/Review";
import profile from "../../../../../public/Images/Profile/profile.png"
const PostedFeedback: React.FC = () => {
  return (
    <div>
      <div className="m-3">

      <Review
        icon={profile}
        name="John Doe"
        id="123"
        date="2023-05-15"
        rating={4.5}
        reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum ullamcorper ante ut pharetra."
      />
      </div>
    
    </div>
  );
};

export default PostedFeedback;
