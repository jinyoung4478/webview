/**
 * Main.tsx
 */
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '../stackflow';

const Main: ActivityComponentType = () => {
  const { push } = useFlow();

  const navigateToArticle = () => {
    push('Article', {
      title: 'Article Page',
    });
  };

  const navigateToSignup = () => {
    push('Signup', {
      title: 'name',
    });
  };

  return (
    <AppScreen appBar={{ title: 'My Main' }}>
      <div>
        My Main
        <button onClick={navigateToArticle}>Go to article page</button>
        <button onClick={navigateToSignup}>Go to signup page</button>
      </div>
    </AppScreen>
  );
};

export default Main;
