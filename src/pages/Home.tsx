import React from "react";
import { Link, useNavigate } from "react-router-dom";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();
  return (
    <div>
      <p>HOME PAGE</p>
      <Link to="/about">Go to the about page</Link><br/>
      <button onClick={() => navigate('/layout/3')}>Go to layout, with a number</button>
    </div>
  );
};

export default HomePage;
