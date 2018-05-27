// @flow
import React from 'react';
import { AddBeerForm as AddBeerFormComponent } from '../../components/AddBeerForm';

type AddBeerFormState = {
    fields: {
        photo: any,
        name: string,
        rate: number | null,
        description: string
    }
};

class AddBeerFormContainer extends React.PureComponent<{}, AddBeerFormState> {
    constructor() {
        super();

        this.state = {
            fields: {
                photo: [],
                name: '',
                rate: null,
                description: ''
            }
        };
    }

    onChangeField = (name: string, value: string) => {
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: value
            }
        });
    };

    render() {
        return (
            <AddBeerFormComponent
                fields={this.state.fields}
                onChangeField={this.onChangeField}
            />
        );
    }
}

export const AddBeerForm = AddBeerFormContainer;
