import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import Work from '../Components/Work.jsx';


const HomePage = () => {
    let [work, setWorks] = useState([]);   
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch('/public/Database/worklist.json');
              const data = await response.json();
              setWorks(data.items);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []);
    return (
        <Navbar>
           
                <div className="flex-shrink-0 float-left bg-green-200 w-2/4 h-screen">
                <h1 className=" text-zinc-950 text-left text-3xl font-extrabold">Increase Your Customers Loyality and Satisfaction.</h1>
                </div>
                <div className='flex-shrink-0 w-2/4 float-right bg-green-200 h-screen'>
                    <img src='/src/Images/Capture1.PNG'/>
                </div>
                <div className='flex-shrink-0 w-screen bg-green-50'>
                </div>
                <div>
                    <Work/>
                </div>
        </Navbar>
    );
};

export default HomePage;