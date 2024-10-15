import { useState } from "react";

export default function Home() {

  const jsonData = [
    { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@yahoo.com" },
    { id: 3, name: "Mike Johnson", email: "mikejohnson@outlook.com" },
    { id: 4, name: "Sarah Williams", email: "sarahwilliams@gmail.com" },
  ];
  
  function App() {
    // State to store search query and filtered results
    const [searchTerm, setSearchTerm] = useState("");
  
    // Function to filter data based on search term
    const handleSearch = (event) => {
      setSearchTerm(event.target.value); // Update search term as user types
    };
  
    // Filtered data based on search term
    const filteredData = jsonData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="App">
    <h1>Search JSON Data</h1>

    <input
      type="text"
      placeholder="Search by name or email"
      value={searchTerm}
      onChange={handleSearch}
    />

    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>
          <p>
            {item.name} - {item.email}
          </p>
        </li>
      ))}
    </ul>
  </div>

  );
  }}
