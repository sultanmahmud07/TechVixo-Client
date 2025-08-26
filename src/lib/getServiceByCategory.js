import { BASEURL } from "../../Constant";

export default async function getServiceByCategory(props) {
    // console.log("PropsPPPPPPPPPPPPPP:", props)
    const result = await fetch(
        `${BASEURL}/services/${props}`
        ,{  cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching get specific service category data!")
    }
    return result.json() || null;
}