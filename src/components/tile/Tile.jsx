import React from 'react';

const {
    string
} = React.PropTypes;

export class Tile extends React.Component {
    render() {
        const {
            icon,
            linkUrl,
            network,
            title
        } = this.props;

        const className = `cell ${network}`;

        const iconPath = `icons/${icon}.svg`;

        return (
            <div>
                <a className={ className } href={ linkUrl } target="_blank">
                    <img src={ iconPath } alt={ network } />
                </a>
            </div>
        )
    }
}

Tile.propTypes = {
    icon: string.isRequired,
    linkUrl: string.isRequired,
    network: string,
    title: string
};