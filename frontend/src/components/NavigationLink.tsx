import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NavLinkType = {
  linkto: string;
  linktext: string;
  icon?: any;
};

const Wrapper = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 1rem;

  .icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover,
  :focus {
    outline: none;
    background-color: rgba(21, 161, 242, 0.1);
    box-shadow: rgb(142 208 249) 0px 0px 0px 2px;
  }
`;

const NavigationLink: React.FC<NavLinkType> = ({ linkto, linktext, icon }) => {
  return (
    <Link to={`${linkto}`} style={{ textDecoration: 'none' }}>
      <Wrapper>
        <FontAwesomeIcon icon={icon} className="icon" />
        <p>{linktext}</p>
      </Wrapper>
    </Link>
  );
};

export default NavigationLink;