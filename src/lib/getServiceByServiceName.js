import { BASEURL } from "../../Constant";

export default async function getServiceByServiceName(props) {
    // console.log("PropsPPPPPPPPPPPPPP:", props)
    const result = await fetch(
        `${BASEURL}/services/category/${props}`
        , { cache: 'no-store' }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching get specific service by service name data!")
    }
    return result.json();
}