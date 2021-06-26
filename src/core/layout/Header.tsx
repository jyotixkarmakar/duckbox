import { Component } from "react";
class Header extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            usersAddress: "Kolkata"
        }
        this.changeCompanyAddress=this.changeCompanyAddress.bind(this);
    }
    changeCompanyAddress() {
        this.setState(() => ({
            usersAddress: "London"
        }));
      }
      
    render() {
        return (
            <div style={{ background: '#000', color: '#5cc' }}>
                <div> Website Name: Duckbox, Company Address: {this.props.companyAddress}</div>
                <div>User name: John Doe, User Address: {this.state.usersAddress}</div>
                <button onClick={this.changeCompanyAddress}>
                    Change Company Address
                </button>
            </div>
        );
    }
}
export default Header;