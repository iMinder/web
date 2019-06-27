import React from 'react';

export default class PDFViewer extends React.Component {
    constructor(props) {
        super(props)
        this.viewRef = React.createRef();
        this.backend = new props.backend();
    }

    componentDidMount() {
        const { src } = this.props
        const element = this.viewRef.current
        this.backend.init(src, element)
    }

    render() {
    return (
        <div ref={this.viewRef} id='viewer' style={{ width: '100%', height: '100%' }}>
        </div>
    )
    }
}