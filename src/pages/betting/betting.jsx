import Bank from "../../components/bank";
import Bet from "./bet";

export default function Betting(props) {
    return (
        <>
            <Bet  {...props} /> 
            <Bank {...props} />
        </>
    )
}