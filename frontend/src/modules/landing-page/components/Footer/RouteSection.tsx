import React from 'react';
import { Link } from 'react-router-dom';

interface dataInterface {
  main: string;
  subItems: string[];
}

const RouteSection = ({ data }: { data: dataInterface }) => {
  return (
    <div className="footer__container__route">
      <h5>{data.main}</h5>
      <ul>
        {data.subItems.map((item) => (
          <li>
            <Link to="/">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteSection;
