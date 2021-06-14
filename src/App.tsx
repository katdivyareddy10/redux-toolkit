import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counterSlice";
import { Breed, useFetchBreedQuery } from "./yelp/yelp-api-slice";

function App() {
  // if we used useSelector generic react import, we wouldnt see what's in the state directly.
  const count = useAppSelector(state => state.counter.value);
  const [limit, setLimit] = useState<Number>(10);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
    dispatch(amountAdded(4));
  };

  const { data = [], isFetching } = useFetchBreedQuery(limit);

  return (
    <div className="App">
      <header className="App-header">
        <p>Boilerplate is from vite react</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
      
      <section>
        Number of dogs fetched: {data.length}
        <div>
          Select number of dogs to fetch: 
          <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed: Breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td><img height={100} width={200} src={breed.image.url}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      </header>
    </div>
  )
}

export default App
