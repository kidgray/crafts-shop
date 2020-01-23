/* Import styled keyword from styled-components library */
import styled from 'styled-components';

/* Import Link Component from react-router-dom library */
import { Link } from 'react-router-dom';

/* Header Div */
export const HeaderDiv = styled.div`
    height: 4.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5625rem;
`;

/* Logo Div */
export const LogoDiv = styled(Link)`
    height: 100%;
    width: 4.5rem;
    padding: .5rem;
`;

/* Link Bar Div */
export const LinkBarDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

/* For bar-item elements that use the Link component */
export const BarItemLink = styled(Link)`
    font-size: 1.3rem;
    padding: .65rem 1rem;
    cursor: pointer;
`;


