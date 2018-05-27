// @flow
import { wallService } from '../services/wall';
import { authService } from '../services/auth';

export const createAsyncActions = (actions: any) => ({
    asyncActions: {
        getWallItems: () => {
            actions.wallClearEntries();
            return wallService.getWallItems().then(actions.wallSetEntries);
        },
        login: () => authService.login(),
        logout: () => authService.logout()
    }
});
