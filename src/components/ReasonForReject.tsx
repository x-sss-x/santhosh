import React from "react";

interface ReasonForRejectProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const ReasonForReject: React.FC<ReasonForRejectProps> = ({ onChange, value }) => {
  return (
    <div>
      <div className="border-b border-black m-5">
        <input
          placeholder="Reason for Reject 1"
          type="text"
          value={value}
          onChange={onChange}
          className="text-lg border-none focus:outline-none bg-transparent"
        />
      </div>
      <div className="border-b border-black mt-4 m-5">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="text-lg border-none focus:outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default ReasonForReject;
