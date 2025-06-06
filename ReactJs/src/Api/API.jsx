import { useState, useEffect } from "react";
// import "../App.css"

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function API() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);      //* 🟡 For loading state
  const [error, setError] = useState(null);          //* 🔴 For error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Failed to fetch data");       //! 👈 Throw error if response not OK
        }
        const result = await res.json();
        setData(result);
        setLoading(false);                              //* ✅ loading complete
      } catch (err) {
        setError(err.message);                         //! 🔴 Save error message in state
        setLoading(false);                            //! ❌ Stop loading even on error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (                                           //! 👈 Show error if exists
        <h1 style={{ color: "red" }}>Error: {error}</h1>
      ) : (
        <>
          <h1>Posts Fetching</h1>
          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
