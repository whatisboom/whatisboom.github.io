import React from 'react';
import { render } from 'react-dom';
import {
    Col,
    Grid,
    Row
} from 'react-bootstrap/lib/';
import {
    Header,
    Tile
} from './components';

class App extends React.Component {
    render() {

        const Tiles = this.getTiles();

        return (
            <Grid>
                <Header />
                { Tiles }
            </Grid>
        );
    }

    getTiles() {
        const TileProps = {
        };

        const InstagramTile = {
            ...TileProps,
            icon: 'instagram',
            linkUrl: 'https://www.instagram.com/whatisboom/',
            network: 'instagram'
        };

        const FacebookTile = {
            ...TileProps,
            icon: 'facebook',
            linkUrl: 'https://www.facebook.com/whatisboom',
            network: 'facebook'
        };

        const LinkedinTile = {
            ...TileProps,
            size: 4,
            icon: 'linkedin',
            linkUrl: 'http://www.linkedin.com/in/whatisboom',
            network: 'linkedin'
        }

        // const TwitterTile = {
        //     ...TileProps,
        //     icon: 'twitter',
        //     linkUrl: 'https://twitter.com/whatisboom',
        //     network: 'twitter'
        // };

        // const BrewtoadTile = {
        //     ...TileProps,
        //     icon: 'beer',
        //     linkUrl: 'http://www.brewtoad.com/brewers/113/recipes',
        //     network: 'brewtoad'
        // };

        const SteamTile = {
            ...TileProps,
            icon: 'steam',
            linkUrl: 'http://steamcommunity.com/id/whatisboom/',
            network: 'steam'
        };

        const GithubTile = {
            ...TileProps,
            icon: 'github',
            linkUrl: 'https://github.com/whatisboom',
            network: 'github'
        };

        const LastfmTile = {
            ...TileProps,
            icon: 'lastfm',
            linkUrl: 'http://last.fm/user/whatisboom',
            network: 'lastfm'
        };

        const EmailTile = {
            ...TileProps,
            icon: 'email',
            linkUrl: 'mailto:brandon@whatisboom.com',
            network: 'email'
        };

        return (
            <div className="content">
                <Row>
                    <Col md={2}>
                        <Tile {...InstagramTile} />
                    </Col>
                    <Col md={4}>
                        <Tile {...LinkedinTile} />
                    </Col>
                    <Col md={2}>
                        <Tile {...GithubTile} />
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <Tile {...SteamTile} />
                    </Col>
                    <Col md={2}>
                        <Tile {...FacebookTile} />
                    </Col>
                    <Col md={2}>
                        <Tile {...LastfmTile} />
                    </Col>
                    <Col md={2}>
                        <Tile {...EmailTile} />
                    </Col>
                </Row>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));