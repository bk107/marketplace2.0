import React from 'react'
// Set Up The Initial Context
export const AppContext = React.createContext()
// Create an exportable consumer that can be injected into components
export const AppContextConsumer = AppContext.Consumer

// Create the provider using a traditional React.Component class
class AppContextProvider extends React.Component {

    state = {
        user: null,
        setUser: user => this.setUser(user),
        // logout: () => this.logout(),
        // isAuthTokenValid: false,
        // setIsAuthTokenValid: state => this.setIsAuthTokenValid(state),
        // login: (p) => this.login(p),
        // getUser: () => this.getUser(),
        // getUserInitals: () => this.getUserInitals(),
        // getAuthController: () => authController,
        // init: () => this.init(),
    }

    componentDidMount() {
        // console.log("context provider mounted")
    }

    setUser(user) {
        console.log("user", user)
        this.setState({
            user
        })
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider