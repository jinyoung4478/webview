/**
 * Home.tsx
 */
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '../stackflow';

const Home: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClick = () => {
    push('Article', {
      title: 'Article Page',
    });
  };

  return (
    <AppScreen appBar={{ title: 'My Activity' }}>
      <div>
        My Home
        <button onClick={onClick}>Go to article page</button>
      </div>
    </AppScreen>
  );
};

export default Home;
