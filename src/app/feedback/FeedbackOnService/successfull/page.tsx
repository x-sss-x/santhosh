import FeedBackSuccess from "@/components/FeedBackSuccess";

var Successfull = () => {
  return (
    <div className="">
        <div className="my-20">

      <FeedBackSuccess
        successText="Thanks for letting us know."
        descriptionText="Your feeback improves the quality of service"
      />
        </div>
    </div>
  );
};
export default Successfull;