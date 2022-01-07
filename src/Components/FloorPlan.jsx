import BedRoom from "./BedRoom"
import LivingRoom from "./LivingRoom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"

function FloorPlan(){


    return(

        <div className="Floorplan">

            <Kitchen/>
            <div className="BedRoom3">
            <BedRoom bedNum="3"/>
            </div>
            <div className="BedRoom2">
            <BedRoom bedNum="2"/>
            </div>
            <div className="BedRoom1">
            <BedRoom bedNum="1"/>
            </div>
            <LivingRoom/>
            <div className="Bath1"><Bath size="Full Bath"/></div>
            <div className="Bath2"><Bath size="Half Bath"/></div>

        </div>
    )

}
export default FloorPlan