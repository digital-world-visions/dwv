import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CompanyItem } from './CompanyItem';

export const CompanySection: FC = () => {
  return (
    <ul className="section-footer-container-item-list">
      <CompanyItem title="About Us" to="/about" />
      <CompanyItem title="Contact Info" to="/" />
      <CompanyItem title="Our Service" to="/" />
      <CompanyItem title="Career" to="/" />
    </ul>
  );
};