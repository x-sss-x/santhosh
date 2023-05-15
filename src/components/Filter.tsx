import { useState } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

export type FilterProps = VariantProps<typeof filterStyles>;

export const filterStyles = cva({
  variants: {
    size: {
      default: 'w-100 h-100',
    },
  },
});

export default function Filter() {
  const [showOptions, setShowOptions] = useState(false);
  const [allServices, setAllServices] = useState(false);
  const [recentServices, setRecentServices] = useState(false);
  const [feedbacks, setFeedbacks] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleAllServicesChange = () => {
    setAllServices(!allServices);
  };

  const handleRecentServicesChange = () => {
    setRecentServices(!recentServices);
  };

  const handleFeedbacksChange = () => {
    setFeedbacks(!feedbacks);
  };

  const handleApplyClick = () => {
    // Handle apply logic here
  };

  return (
    <div className={filterStyles()}>
      <div className="block justify-between items-center w-200 h-200 px-4 py-2">
        <button
          className="bg-zinc-300 w-1762 h-100 px-4 py-2"
          onClick={handleToggleOptions}
        >
          Filters
        </button>
      </div>
      {showOptions && (
        <div className="px-4 py-2 bg-zinc-300 ">
          <div>
            <input
              className="bg-zinc-300 hover:bg-zinc-400"
              type="checkbox"
              checked={allServices}
              onChange={handleAllServicesChange}
            />
            <label htmlFor="allServices">All types of services</label>
          </div>
          <div>
            <input
              className="bg-zinc-300 hover:bg-zinc-400"
              type="checkbox"
              checked={recentServices}
              onChange={handleRecentServicesChange}
            />
            <label htmlFor="recentServices">Most recently used services</label>
          </div>
          <div>
            <input
              className="bg-zinc-300 hover:bg-zinc-400"
              type="checkbox"
              checked={feedbacks}
              onChange={handleFeedbacksChange}
            />
            <label htmlFor="feedbacks">Feedbacks</label>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-zinc-300 px-4 py-2 hover:bg-zinc-400"
              onClick={handleApplyClick}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
