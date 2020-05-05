import React from "react";


class Month extends React.Component {

    constructor() {
        super()
    }


    render() {
        return (
        <div>
            <h1>console.log({this.props.month})</h1>
            <h1>{this.props.month}</h1>
        </div>
        );
    };

}

export default Month;