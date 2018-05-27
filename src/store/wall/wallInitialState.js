// @flow
import type { WallState } from './wallTypes';

export const wallInitialState: WallState = {
    entries: [
        {
            id: '1',
            title: 'Test APA',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum, quam ut consequat maximus, purus tortor ultrices felis, id efficitur nunc erat vel mi. Praesent in lacus nunc. Pellentesque suscipit felis sed velit tempor dignissim.'
        },
        {
            id: '2',
            title: 'Double Test AIPA',
            description:
                'Curabitur bibendum, quam ut consequat maximus, purus tortor ultrices felis, id efficitur nunc erat vel mi. Praesent in lacus nunc. Pellentesque suscipit felis sed velit tempor dignissim. Ut ultricies ante efficitur sapien dictum, ut porttitor purus porta.'
        }
    ]
};
