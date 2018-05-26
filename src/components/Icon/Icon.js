// @flow
import React from 'react';
import FontAwsomeIcon from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/fontawesome-free-solid';

type IconProps = {
    name: 'plus' | string
};

const createIconName = (name: string): string =>
    `fa${name[0].toUpperCase()}${name.slice(1)}`;

export const Icon = ({ name }: IconProps) => (
    <FontAwsomeIcon icon={icons[createIconName(name)]} />
);
