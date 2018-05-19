
import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name}) => <h3>Hello {name}</h3>;

class LazyHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {component: null};
    }
    componentDidMount() {
        setTimeout(() => this.setState({component: Hello}), 300);
    }
    render() {
        const LazyComponent = this.state.component;
        if (!LazyComponent) {
            return <div>...loading</div>;
        }
        return <LazyComponent {...this.props} />;
    }
}
const Wrapper = () => (
    <div>
        <h2> Wrapper </h2>
        <LazyHello name="foo" />
    </div>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }
    render() {
        return (
            <div>
                <h1 onClick={() => this.setState({show: !this.state.show})}>Click me!</h1>
                {this.state.show && <Wrapper />}
                {/* {this.state.show && <LazyHello />} */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

