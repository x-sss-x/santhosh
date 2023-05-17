import { cva } from 'class-variance-authority';
import Image from 'next/image';
import couponDealsImage from '../../public/Images/Icons/coupon-deals.png';

const CouponDealsButtonStyle = cva('flex flex-col items-center justify-center bg-zinc-300 h-107 w-107 py-4 px-4');

interface CouponDealsProps {
  text: string;
}

const CouponDeals: React.FC<CouponDealsProps> = ({ text }) => {
  return (
    <button className={CouponDealsButtonStyle()}>
      <div className="flex items-center justify-center">
        <Image src={couponDealsImage} alt="Coupon Deals" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default CouponDeals;
