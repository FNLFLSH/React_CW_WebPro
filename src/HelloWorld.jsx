import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
        	<div className="hello-world">
                {/*TODO (HelloWorld): Add a line such that "Hello World!" is displayed on your webpage!*/}
                <h1>Hello World!</h1>
                {this.props.name && <p>Hello, {this.props.name}!</p>}
            </div>
        );
    }
}
export default HelloWorld;