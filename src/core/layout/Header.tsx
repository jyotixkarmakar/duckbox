import { Component } from "react";
class Header extends Component<any, any> {

    // initialization stage

    constructor(props: any) {
        super(props);
        this.state = {
            usersAddress: "Kolkata"
        }
        console.log("Inside constructor, user is currently at: Kolkata, officical address:", this.state.usersAddress)
        this.changeCompanyAddress = this.changeCompanyAddress.bind(this);
    }

    //mounting stage

    componentWillMount() {
        this.setState(() => ({
            usersAddress: "Delhi"
        }));
        console.log("Inside componentWillMount, user is currently  at: Delhi, officical address:", this.state.usersAddress)
    }

    render() {
        console.log("Inside render, user can not change its city, just updating official address by setting value from setstate.\n now:", this.state.usersAddress)
        return (
            <div style={{ background: '#000', color: '#5cc' }}>
                <div> Website Name: Duckbox, Company Address: {this.props.companyAddress}</div>
                <div>User name: John Doe, User Address: {this.state.usersAddress}</div>
                <button onClick={this.changeCompanyAddress}>
                    Change Company Address
                </button>
                <a href="https://www.google.com/">go to google</a>
            </div>
        );
    }

    componentDidMount() {
        this.setState(() => ({
            usersAddress: "Kabul"
        }));
        console.log("Inside componentDidMount, user is currently at: Kabul, officical address:", this.state.usersAddress)
    }

    // update
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log("Inside shouldComponentUpdate,there is some update happen props or state,deciding wheater to update or not");
        console.log("User don't want to show his friends that he visited Kabul, so if the current city is Kabul he wont render that");
        console.log("current props: ", this.props, " updated props: ", nextProps);
        console.log("current state: ", this.state, " updated state: ", nextState);
        if (nextState.usersAddress == "Kabul") {
            return false;
        }
        else {
            return true;
        }
    }
    componentWillUpdate() {
        console.log("Inside componentDidUpdate, user is currently at: ", this.state.usersAddress, " officical address:", this.state.usersAddress)
        console.log("We should not change location now,else value would again change and the method would again call in infinity loop: ");
    }
    componentDidUpdate() {
        console.log("Inside componentDidUpdate, user is currently at: ", this.state.usersAddress, " officical address:", this.state.usersAddress)
        console.log("We should not change location now,else value would again change and the method would again call in infinity loop: ");
    }

    // unmount 

    componentWillUnmount() {
        console.log("Inside componentWillUnmount, leaving the universe");
    }
    // custom methods

    changeCompanyAddress() {
        this.setState(() => ({
            usersAddress: "London"
        }));
    }

}
export default Header;