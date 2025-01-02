 import {useEffect, useState} from "react";
 import axios from "axios";

const RecentlyAdded = () => {
    const [Data, setData] = useState();
    // useEffect(() => {
    //     const fetch = async ()=>{
    //         const response = await axios.get("http://localhost:1000/api/v1//get-recent-book");
    //         // console.log(response.data.data)}
    //         console.log("Test log")}

    // }, [])
    // fetch
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:1000/api/v1/get-all-book");
            console.log(response.data.data); // Debugging log
            setData(response.data.data); // Update state with the fetched data
          } catch (error) {
            console.error("Error fetching recent books:", error);
          }
        };
    
        fetchData(); // Call the fetchData function
      }, []);
  return (
    <div className="mt-8 px-4">
        <h4 className="text-3xl text-yellow-100">Recently Added Books</h4>
    </div>
  )
}

export default RecentlyAdded;
