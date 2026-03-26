import React from 'react'
import useFetch from "./useFetch";
import "./App.css"



function App() {
  const {data,loading ,error} = useFetch(
      "https://api.escuelajs.co/api/v1/products"
  );
  
  
  


  return(
    <div className='container'>
    <h1>📄 Posts</h1>
     
     {loading && <p className='loading'>loading...</p>}
     {error && <p className='error'>Error: {error}</p>}

     <div className='card-container'>
    { data &&
     data.slice(0,10).map((post, index) => (
      <div className='card'  key={post.id} style={{backgroundColor:index % 2==0 ? 'lightblue':'skyblue'}}>
        <h3>{post.title}</h3>
      <p>{post.body}</p>
      </div>
    ))}
    

    </div>
    </div>
  );

};

export default App;
