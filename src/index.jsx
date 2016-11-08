import React from 'react';
import { render } from 'react-dom';
import {
    Header,
    Tile
} from './components';

class App extends React.Component {
    render() {

        const Tiles = this.getTiles();

        return (
            <div>
                <Header />
                { Tiles }
            </div>
        );
    }

    getTiles() {
        const TileProps = {
        };

        const TwitterTile = {
            ...TileProps,
            title: 'twitter',
            linkUrl: 'https://twitter.com/whatisboom'
        };

        return (
            <Tile {...TwitterTile} />
        );
    }
}

render(<App />, document.getElementById('app'));