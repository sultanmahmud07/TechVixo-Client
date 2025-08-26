import { BASEURL } from "../../Constant";

export default async function getServices() {
    try {
        const response = await fetch(
            `${BASEURL}/services`,
            // {
            //     cache: "no-store"
            //     // next: {
            //     //     revalidate: 5,
            //     // }
            // }
        )
        const data = await response.json();
        return data || null;

    }
    catch (error) {
        console.log(error.message);
        throw new Error("There was an error fetching all Services Data!")
    }
}