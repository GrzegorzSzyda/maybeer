// @flow
import React from 'react';
import { connect, actions, type State, userFirebaseActions } from '../../store';
import { NavigationBar } from '../../components/NavigationBar';
import { LoginForm } from '../../components/LoginForm';
import type { UserState } from '../../store/user/userTypes';

type NavigationProps = {
    user: UserState
};

class NavigationContainer extends React.PureComponent<NavigationProps, {}> {
    render() {
        return (
            <div>
                <LoginForm
                    show={this.props.user.showLogin}
                    onLogin={userFirebaseActions.login}
                />
                <NavigationBar
                    isLogged={this.props.user.isLogged}
                    onShowLogin={actions.userShowLogin}
                />
            </div>
        );
    }
}

export const Navigation = connect((state: State) => ({
    user: state.user
}))(NavigationContainer);
