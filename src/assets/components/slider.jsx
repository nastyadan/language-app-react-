
import React from "react";
import Card from "./card";

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render() {
        const { ...props } = this.props;
        return (
            <Card  {...props}></Card >
        )
    }
}
