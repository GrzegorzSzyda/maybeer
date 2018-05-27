// @flow
import React from 'react';
import { AddBeerForm as AddBeerFormComponent } from '../../components/AddBeerForm';

class AddBeerFormContainer extends React.PureComponent<{}> {
    render() {
        return <AddBeerFormComponent />;
    }
}

export const AddBeerForm = AddBeerFormContainer;
