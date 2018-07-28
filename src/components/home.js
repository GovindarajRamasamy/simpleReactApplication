import React from 'react';

const Home = () => (
  <section className="formContainer">
   <article className="techList">
      <div><h1>Client Side Technologies</h1></div>
      <div>
      <ul>
        <li>HTML5 </li>
        <li>React Js</li>
        <li>Redux</li>
        <li>Less preprocessor </li>
        <li>Babel compiler </li>
        <li>Rx Js </li>
        <li>Fetch Api </li>
       </ul>
       </div>
    </article>
     <article className="techList">
       <div><h1>Server Side Technologies</h1></div> 
       <div>
        <ul>
          <li>Java spring boot</li>
          <li>Jersey RESTful services</li>
        </ul>
       </div>    
     </article>
     
  </section>
)
export default Home;