import React from 'react';
import { TITLE } from '../../constants';

export class Header extends React.Component {
    render() {
        return (
            <h1>{ TITLE }</h1>
        );
    }
}

export default Header;