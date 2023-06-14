import Button from "@/components/Button";
import Link from "next/link";
const Bookingdetails = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <div>
            <label htmlFor="workArea">
              <h1 className="font-bold">Work Area</h1>
              <input
                type="text"
                placeholder="WORK AREA"
                name="workArea"
                className="bg-zinc-300 rounded-xl py-2 px-5 w-60 m-3 xs:w-48"
              />
            </label>
          </div>
          <div className="flex">
            <div>
              <label htmlFor="Date">
                <h1 className="font-bold">Date</h1>
                <input
                  type="date"
                  placeholder="DATE"
                  name="Date"
                  className="bg-zinc-300 rounded-xl py-2 px-5 w-30 m-3 "
                />
              </label>
            </div>
  
            <div>
              <label htmlFor="time">
                <h1 className="font-bold">Time</h1>
                <input
                  type="time"
                  placeholder="TIME"
                  name="time"
                  className="bg-zinc-300 rounded-xl py-2 px-5 w-30 m-3"
                />
              </label>
            </div>
          </div>
  
          <div className="m-2">
            <label htmlFor="address">
              <h1 className="font-bold">Address</h1>
              <input
                type="address"
                placeholder="address"
                name="address"
                className="bg-zinc-300 rounded-xl py-2 px-5 w-60 m-3 xs:w-48"
              />
            </label>
          </div>
        </div>
  
        <footer className="fixed bottom-0 left-0 right-0 py-4 bg-zinc-300 h-20 flex justify-center items-center">
            <div className="m-4">
            <p className="">Price</p>
          <h1 className="font-bold text-xl">20$/day</h1>
            </div>
          
          <div className="ml-40">
          <Link href="./bookservice/bookingdetails/successfull">
          <Button>Hire Now</Button>
          </Link>
          </div>
          
        </footer>
      </div>
    );
  };
  
  export default Bookingdetails;
  