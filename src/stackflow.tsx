import { stackflow } from '@stackflow/react';
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
  ],
  activities: {
    Home,
    Article,
    Signup,
  },
  initialActivity: () => 'Home',
});
