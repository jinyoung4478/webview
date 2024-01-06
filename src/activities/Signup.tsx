/**
 * Signup.tsx
 */
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useStepFlow } from '../stackflow';

type SignupParams = {
  title: string;
};
const Signup: ActivityComponentType<SignupParams> = ({ params }) => {
  const { stepPush, stepPop } = useStepFlow('Article');
  const { title } = params;

  const onNextStep = (step: string) => {
    stepPush({
      title: step,
    });
  };

  const onPrevClick = () => {
    // `stepPop()`을 호출하면 이전 params.title로 돌아가요
    stepPop();
  };

  return (
    <AppScreen appBar={{ title: '회원가입' }}>
      <div>
        <h1>{title}</h1>
        {title === 'name' && (
          <div>
            <p>이름 입력</p>
            <input type="text" />
            <button onClick={() => onNextStep('id')}>next</button>
          </div>
        )}
        {title === 'id' && (
          <div>
            <p>아이디 입력</p>
            <input type="text" />
            <button onClick={onPrevClick}>이전</button>
          </div>
        )}
      </div>
    </AppScreen>
  );
};

export default Signup;
