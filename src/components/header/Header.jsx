import React from 'react';
import {
    Col,
    Row
} from 'react-bootstrap/lib/';
import { TITLE } from '../../constants';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <Row>
                    <Col md={12}>
                        <h1>{ TITLE }</h1>
                    </Col>
                </Row>
            </header>
        );
    }
}

export default Header;