import * as React from 'react';
import * as Sentry from '@sentry/gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Label } from './Label';
import { TextInput } from './TextInput';
import { RadioButton } from './RadioButton';
import { Textarea } from './Textarea';
import { Button } from './Button';

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams: Record<string, string>
    ) => void;
  }
}

interface FormFields {
  name?: string;
  email?: string;
  rsvp?: 'coming' | 'not-coming';
  dietaryRequirements?: string;
  comments?: string;
}

// Lifted directly from Yup email validation.
const EMAIL_REGEX_PATTERN =
  // eslint-disable-next-line no-control-regex, no-useless-escape
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

const REQUIRED_FIELD_ERROR_MESSAGE = 'This field is required!';
const INVALID_EMAIL_ERROR_MESSAGE = 'Invalid e-mail!';

function isErrorObject(e: unknown): e is Error {
  return (
    e !== null &&
    typeof e === 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'message')
  );
}

const formFieldMap: Record<string, string> = {
  name: 'Name',
  email: 'E-mail',
  rsvp: 'RSVP',
  dietaryRequirements: 'Dietary Requirements',
  comments: 'Comments'
};

async function submit(data: FormFields) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'form_submit', { data: JSON.stringify(data) });
  }
  const submitData: Record<string, string> = Object.fromEntries(
    Object.entries(data)
      .filter(([, v]) => typeof v !== 'undefined')
      .map(([k, v]) => [formFieldMap[k], v])
  );
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(submitData as Record<string, string>).toString()
    });

    if (!response.ok) {
      throw new Error(
        `Attempt to post form data resulted in ${response.status} response`
      );
    }
  } catch (e) {
    if (isErrorObject(e)) {
      throw new Error(`Form submit error: ${e.message}`);
    }

    throw new Error('Unkown error sumitting form');
  }
}

export function ContactForm() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    defaultValues: { rsvp: 'coming' }
  });

  const onSubmit = async (data: FormFields) => {
    try {
      await submit(data);
      reset();
      toast.success('Got it! Thanks for responding!');
    } catch (e) {
      toast.error("Oh no! That didn't work, try again!");
      Sentry.captureException(e, {
        contexts: { form: data as Record<string, string | undefined> }
      });
    }
  };

  const rsvp = watch('rsvp');

  return (
    <form
      className="w-full"
      data-netlify="true"
      name="RSVP"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="form-name" value="RSVP" />
      <div className="stack">
        <motion.div layout>
          <Label>
            Name(s)
            <TextInput
              type="text"
              placeholder="John and Jane Smith"
              validationError={errors.name?.message}
              {...register('name', {
                required: { value: true, message: REQUIRED_FIELD_ERROR_MESSAGE }
              })}
            />
          </Label>
        </motion.div>
        <motion.div layout>
          <Label>
            E-mail
            <TextInput
              type="text"
              placeholder="jane.smith@example.com"
              validationError={errors.email?.message}
              {...register('email', {
                required: {
                  value: true,
                  message: REQUIRED_FIELD_ERROR_MESSAGE
                },
                pattern: {
                  value: EMAIL_REGEX_PATTERN,
                  message: INVALID_EMAIL_ERROR_MESSAGE
                }
              })}
            />
          </Label>
        </motion.div>
        <motion.div className="stack-row items-center" layout>
          <Label inline>
            <RadioButton
              value="coming"
              checked={rsvp === 'coming'}
              {...register('rsvp')}
            />
            Coming
          </Label>
          <Label inline>
            <RadioButton
              value="not-coming"
              checked={rsvp === 'not-coming'}
              {...register('rsvp')}
            />
            Not coming
          </Label>
        </motion.div>
        <AnimatePresence>
          {rsvp === 'coming' && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Label>
                Dietary requirements
                <Textarea
                  placeholder="Vegan, vegetarian, gluten-free and anything like that!"
                  {...register('dietaryRequirements')}
                />
              </Label>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div layout>
          <Label>
            Anything else?
            <Textarea
              placeholder="Let us know if you are interested in accommodation or have any other requirements"
              {...register('comments')}
            />
          </Label>
        </motion.div>
        <motion.div layout>
          <Button type="submit" disabled={isSubmitting} loading={isSubmitting}>
            Submit
          </Button>
        </motion.div>
      </div>
    </form>
  );
}
