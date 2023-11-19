
import React, { useState, useEffect } from 'react';
import Work from '../Components/Work';

const WorkList = () => {
  const [work, setWorks] = useState([]);

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
    <div>
      {work.map((item, index) => (
        <Work key={index} title={Work.title} image={Work.image} />
      ))}
    </div>
  );
};

export default WorkList;