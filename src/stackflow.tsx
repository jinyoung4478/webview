import { stackflow } from '@stackflow/react';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

import Home from './activities/Home';
import Article from './activities/Article';
import Signup from './activities/Signup';

export const { Stack, useFlow, useStepFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
    // historySyncPlugin({
    //   routes: {
    //     Home: '/',
    //     Article: '/articles/:articleId',
    //     Signup: '/signup',
    //   },
    //   fallbackActivity: () => 'Home', // For 404 page
    // }),
    () => {
      return {
        key: 'my-plugin',
        onInit() {
          console.log('Initialized!');
        },
      };
    },
  ],
  activities: {
    Home,
    Article,
    Signup,
  },
  initialActivity: () => 'Home',
});
