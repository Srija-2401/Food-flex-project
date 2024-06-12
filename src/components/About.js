import { Link } from "react-router-dom";
import UserCard from "./UserCard";

const About = () =>{
    return (<div className="text-center">
        <h1 className="text-3xl font-bold font-beb py-4">Welcome to the about section</h1>
        <p className="text-2xl py-4">GGR Srija</p>
        <p className="text-2xl py-2">Bhimavaram</p>
        <div className="flex items-center justify-center gap-4 py-2 text-2xl">
           <p className="">Contact :  </p>
           <Link to="https://www.linkedin.com/in/srija-ggr-323a1526b/"><img className="w-8" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"></img></Link>
           <Link to="https://github.com/Srija-2401"><img className="w-8" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img></Link>
        </div>
        
        {/* <UserCard name={"Srija"} location={"Bhimavaram"}/> */}
    </div>)
}
export default About;