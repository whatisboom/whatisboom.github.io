import React from 'react';

const {
    string
} = React.PropTypes;

export class Tile extends React.Component {
    render() {
        const {
            title,
            linkUrl
        } = this.props;

        return (
            <div>
                <a href={ linkUrl } target="_blank">{ title }</a>
            </div>
        )
    }
}

Tile.propTypes = {
    linkUrl: string.isRequired,
    title: string.isRequired
};