import Button from "@/components/Button"
import Link from "next/link";


var Filters=()=>{
    return(
        <div>
            <div className="m-3">
                <Link href="./bookservice">
            <Button intent={"feedback"}>All types of services</Button></Link>
            </div>
            <div className="m-3">
                <Link href="./searchfilters/RecentServices">
            <Button intent={"feedback"}>Most recently used services</Button>
                </Link>
            </div>
            <div className="m-3">
                <Link href="./searchfilters/servicesByFeedback">
            <Button intent={"feedback"}>Based on feedbacks</Button>
            </Link>
            </div>
        </div>
    )
}

export default Filters;