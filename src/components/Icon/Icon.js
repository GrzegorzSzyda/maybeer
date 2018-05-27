// @flow
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/fontawesome-free-solid';

type IconProps = {
    name: 'plus' | 'list' | 'userCircle' | 'key' | 'spinner' | 'star' | string
};

const createIconName = (name: string): string =>
    `fa${name[0].toUpperCase()}${name.slice(1)}`;

export const Icon = ({ name }: IconProps) => (
    <FontAwesomeIcon icon={icons[createIconName(name)]} />
);
