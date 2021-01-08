import React from 'react'
import classes from './HorizontalSlider.module.css';

const styles = {
    mobile: {
        overflow: 'scroll'
    },
    desktop: {
        overflow: 'hidden'
    }
}
export class HorizontalSlider extends React.Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
        this.state = {
            matches: window.matchMedia("(max-width: 800px)").matches
        }
    }
    setMatches = (matches) => {
        this.setState({ matches: matches });
    }
    componentDidMount() {
        const handler = event => this.setMatches(event.matches);
        window.matchMedia("(max-width: 800px)").addListener(handler);
    }
    handleItemChange = (direction) => {
        if (direction === 'left') {
            this.itemRef.current.scrollLeft -= this.itemRef ? 500 : null;
        } else {
            this.itemRef.current.scrollLeft += this.itemRef ? 500 : null;
        }
    }
    render() {
        return (
            <div className={classes.ItemsContainer}>
                <div className={classes.ArrowItem}>
                    <div className={classes.Button} onClick={() => this.handleItemChange('left')}>
                        <i className="fa fa-lg fa-chevron-left"></i>
                    </div>
                </div>
                <div className={classes.Items} ref={this.itemRef} style={this.state.matches ? styles.mobile : styles.desktop}>
                    {this.props.items.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className={classes.ArrowItem}>
                    <div className={classes.Button} onClick={() => this.handleItemChange('right')}>
                        <i className="fa fa-lg fa-chevron-right"></i>
                    </div>
                </div>

            </div>
        )
    }
}
