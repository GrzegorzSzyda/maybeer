// @flow
import React from 'react';
import { AddBeerForm as AddBeerFormComponent } from '../../components/AddBeerForm';

type AddBeerFormState = {
    fields: {
        photo: string | ArrayBuffer | null,
        name: string,
        rating: number,
        description: string
    }
};

class AddBeerFormContainer extends React.PureComponent<{}, AddBeerFormState> {
    constructor() {
        super();

        this.state = {
            fields: {
                photo: null,
                name: '',
                rating: 0,
                description: ''
            }
        };
    }

    onChangeField = (name: string, value: string | number | any) => {
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: value
            }
        });
    };

    onChangePhoto = (files: Blob[]) => {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onloadend = () => {
            this.setState({
                fields: {
                    ...this.state.fields,
                    photo: reader.result
                }
            });
        };
    };

    render() {
        return (
            <AddBeerFormComponent
                fields={this.state.fields}
                onChangeField={this.onChangeField}
                onChangePhoto={this.onChangePhoto}
            />
        );
    }
}

export const AddBeerForm = AddBeerFormContainer;
