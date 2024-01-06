/**
 * Signup.tsx
 */
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

type SignupParams = {
  title: string;
};
const Signup: ActivityComponentType<SignupParams> = ({ params }) => {
  return (
    <AppScreen appBar={{ title: '회원가입' }}>
      <div>
        <h1>{params.title}</h1>
      </div>
    </AppScreen>
  );
};

export default Signup;
