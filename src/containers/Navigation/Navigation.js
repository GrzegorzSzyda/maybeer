// @flow
import React from 'react';
import { connect, actions, type State, asyncActions } from '../../store';
import { NavigationBar } from '../../components/NavigationBar';
import type { UserState } from '../../store/user/userTypes';

type NavigationProps = {
    user: UserState
};

class NavigationContainer extends React.PureComponent<NavigationProps, {}> {
    render() {
        return (
            <div>
                {this.props.user.showLogin && (
                    <button onClick={asyncActions.login}>Zaloguj przez Facebook</button>
                )}
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
