import React from "react";

const Dashboard: React.FC = () => {
  // State variables
  const [data, setData] = React.useState<any[]>([]);

  // Fetch data from API
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/dashboard");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
