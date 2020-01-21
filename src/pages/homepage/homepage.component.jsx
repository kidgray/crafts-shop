import React from 'react';

/* Import Directory component */
import { Directory } from '../../components/directory/directory.component';

/* Import Styled Homepage <div> Component */
import { HomePageDiv } from './homepage.styles';

/* Don't need state data or lifecycle methods in the
homepage, so just make it a Functional Component */

export const HomePage = () => (
    <HomePageDiv>
        <Directory />
    </HomePageDiv>
);