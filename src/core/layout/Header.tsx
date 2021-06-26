import { Component } from "react";
class Header extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            usersAddress: "Kolkata"
        }
    }
    render() {
        return (
            <div style={{ background: '#000', color: '#5cc' }}>
                <div> Website Name: Duckbox, Company Address: {this.props.companyAddress}</div>
                <div>User name: John Doe, User Address: {this.state.usersAddress}</div>
            </div>
        );
    }
}
export default Header;