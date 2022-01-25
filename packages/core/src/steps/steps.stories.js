import React from 'react';
import { storiesOf } from '@storybook/react';
import { Steps, useSteps } from './';
import Stack from '../stack';
import Box from '../box';
import Button from '../button';

const stories = storiesOf('Steps', module);

stories.add('simple', () => {
  return (
    <Stack>
      <Steps clickable>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Steps.Step title="Waiting" description="This is a description." />
      </Steps>
      <Steps clickable defaultStep={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Steps.Step title="Waiting" description="This is a description." />
      </Steps>
      <Steps clickable defaultStep={2}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Steps.Step title="Waiting" description="This is a description." />
      </Steps>
    </Stack>
  );
});

const ControlledDemo = () => {
  const { current, nextStep, prevStep, goToStep } = useSteps({
    defaultStep: 0,
    stepCount: 3
  });

  return (
    <Stack p={4}>
      <Steps clickable current={current}>
        <Steps.Step
          title="Finished"
          description="This is a description."
          onClick={() => {
            goToStep(0);
          }}
        />
        <Steps.Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
          onClick={() => {
            goToStep(1);
          }}
        />
        <Steps.Step
          title="Waiting"
          description="This is a description."
          onClick={() => {
            goToStep(2);
          }}
        />
      </Steps>

      <Box
        borderRadius="sm"
        width="100%"
        height="300px"
        bg="gray.200"
        borderStyle="dashed"
        borderWidth="1px"
        borderColor="divider"
        p={4}
      >
        Content step #{current + 1}
      </Box>
      <Stack inline>
        <Button size="sm" onClick={nextStep}>
          Next
        </Button>
        {current !== 0 && (
          <Button size="sm" variant="secondary" onClick={prevStep}>
            Prev
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

stories.add('controlled', () => <ControlledDemo />);
