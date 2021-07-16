import { Component } from "react";

export class Page1 extends Component<any, any> {
    componentWillMount() {
        
        console.log("Inside componentWillMount, user is currently  at: Delhi, officical address:")
    }

    componentDidMount() {
        console.log("Inside componentDidMount, user is currently at: Kabul, officical address:")
    }

    // update
    shouldComponentUpdate(nextProps: any, nextState: any) {
            return true;
    }
    componentWillUpdate() {
        console.log("Inside componentDidUpdate, user is currently at: ", " officical address:")
        console.log("We should not change location now,else value would again change and the method would again call in infinity loop: ");
    }
    componentDidUpdate() {
        console.log("Inside componentDidUpdate, user is currently at: ", " officical address:")
        console.log("We should not change location now,else value would again change and the method would again call in infinity loop: ");
    }

    // unmount 

    componentWillUnmount() {
        console.log("Inside componentWillUnmount, leaving the universe");
    }
    render() {
        return <div>
            Page 1
        </div>
    }
}