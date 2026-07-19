import React, { useState, useEffect } from 'react';
import "./Dealers.css";
import "../assets/style.css";
import Header from '../Header/Header';
import review_icon from "../assets/reviewicon.png";

const Dealers = () => {

  // Dealers currently shown in table
  const [dealersList, setDealersList] = useState([]);

  // Stores all unique states 
  const [states, setStates] = useState([]);

  // Stores text typed in search box
  const [searchQuery, setSearchQuery] = useState('');

  // Backup copy of all dealers before filtering
  const [originalDealers, setOriginalDealers] = useState([]);

  let dealer_url = "/djangoapp/get_dealers";

  // Gets all dealers when page loads
  const get_dealers = async () => {
    const res = await fetch(dealer_url, {
      method: "GET"
    });

    const retobj = await res.json();

    if (retobj.status === 200) {

      let all_dealers = Array.from(retobj.dealers);

      let states = [];

      all_dealers.forEach((dealer) => {
        states.push(dealer.state);
      });

      // Save unique states
      setStates(Array.from(new Set(states)));

      // Initially show all dealers
      setDealersList(all_dealers);

      // Save original list for future searching
      setOriginalDealers(all_dealers);
    }
  };

  

  // Runs whenever user types
  const handleInputChange = (event) => {

    const query = event.target.value;

    // Save current search text
    setSearchQuery(query);

    // Filter dealers by state name
    const filtered = originalDealers.filter(dealer =>
      dealer.state.toLowerCase().includes(query.toLowerCase())
    );

    // Update displayed dealers
    setDealersList(filtered);
  };

  // Runs when user leaves textbox
  const handleLostFocus = () => {

    // If textbox is empty, restore all dealers
    if (!searchQuery) {
      setDealersList(originalDealers);
    }
  };

  // Runs only once when page opens
  useEffect(() => {
    get_dealers();
  }, []);

  let isLoggedIn =
    sessionStorage.getItem("username") != null ? true : false;

  return (
    <div>

      <Header />

      <table className='table'>
        <tr>
          <th>ID</th>
          <th>Dealer Name</th>
          <th>City</th>
          <th>Address</th>
          <th>Zip</th>

          <th>

            {/* 
                Dropdown replaced with searchable textbox
            */}
            <input
              type="text"
              placeholder="Search states..."
              onChange={handleInputChange}
              onBlur={handleLostFocus}
              value={searchQuery}
            />

          </th>

          {isLoggedIn ? (
            <th>Review Dealer</th>
          ) : <></>}
        </tr>

        {dealersList.map((dealer) => (
          <tr key={dealer.id}>
            <td>{dealer.id}</td>

            <td>
              <a href={'/dealer/' + dealer.id}>
                {dealer.full_name}
              </a>
            </td>

            <td>{dealer.city}</td>
            <td>{dealer.address}</td>
            <td>{dealer.zip}</td>
            <td>{dealer.state}</td>

            {isLoggedIn ? (
              <td>
                <a href={`/postreview/${dealer.id}`}>
                  <img
                    src={review_icon}
                    className="review_icon"
                    alt="Post Review"
                  />
                </a>
              </td>
            ) : <></>}
          </tr>
        ))}

      </table>

    </div>
  );
};

export default Dealers;