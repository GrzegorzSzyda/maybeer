// @flow
import React from 'react';
import { connect, actions, type State } from '../../store';
import { NavigationBar } from '../../components/NavigationBar';
import type { UserState } from '../../store/user/userTypes';

type NavigationProps = {
    user: UserState
};

class NavigationContainer extends React.PureComponent<NavigationProps, {}> {
    render() {
        return (
            <NavigationBar
                isLogged={this.props.user.isLogged}
                onShowLogin={actions.showLogin}
            />
        );
    }
}

export const Navigation = connect((state: State) => ({
    user: state.user
}))(NavigationContainer);
