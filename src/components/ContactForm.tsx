import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Label } from './Label';
import { Box } from './Box';
import { TextInput } from './TextInput';
import { RadioButton } from './RadioButton';
import { Textarea } from './Textarea';
import { Stack } from './Stack';

interface FormFields {
  name?: string;
  email?: string;
  rsvp?: 'coming' | 'not-coming';
  dietaryRequirements?: string;
  comments?: string;
}

export function ContactForm() {
  const { register, watch, ...rest } = useForm<FormFields>({
    defaultValues: { rsvp: 'coming' }
  });

  const rsvp = watch('rsvp');
  console.log(rest);
  console.log(rsvp);
  return (
    <Box as="form" width="100%">
      <Stack>
        <Label>
          Name
          <TextInput type="text" defaultValue="test" {...register('name')} />
        </Label>
        <Label>
          E-mail
          <TextInput type="text" defaultValue="test" {...register('email')} />
        </Label>
        <Stack direction="row">
          <Label inline>
            <RadioButton
              value="coming"
              checked={rsvp === 'coming'}
              {...register('rsvp')}
            />
            <Box as="span">Coming</Box>
          </Label>
          <Label inline>
            <RadioButton
              value="not-coming"
              checked={rsvp === 'not-coming'}
              {...register('rsvp')}
            />
            <Box as="span">Not coming</Box>
          </Label>
        </Stack>
        {rsvp === 'coming' && (
          <Label>
            Dietary requirements
            <Textarea
              defaultValue="test"
              {...register('dietaryRequirements')}
            />
          </Label>
        )}
        <Label>
          Anything else?
          <Textarea defaultValue="test" {...register('comments')} />
        </Label>
      </Stack>
    </Box>
  );
}
