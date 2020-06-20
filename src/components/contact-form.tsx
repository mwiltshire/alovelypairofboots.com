import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Form, Formik, Field } from 'formik';
import { object, string } from 'yup';
import qs from 'qs';
import Container from './container';
import Input from './input';
import SubmitButton from './submit-button';

type ContactFormProps = {
  onSuccess: () => void;
  onError: () => void;
};

const initialValues = {
  'bot-field': '',
  'form-name': 'contact',
  name: '',
  email: '',
  message: ''
};

const schema = object().shape({
  name: string().required('Required field!'),
  email: string()
    .email('Invalid email address!')
    .required('Required field!'),
  message: string().required('Required field!')
});

export const ContactForm: FC<ContactFormProps> = ({ onSuccess, onError }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (data, actions) => {
        try {
          const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: qs.stringify(data)
          });
          if (!response.ok) {
            throw new Error();
          }
          onSuccess();
          actions.resetForm();
        } catch (e) {
          onError();
        } finally {
          actions.setSubmitting(false);
        }
      }}
      validationSchema={schema}
    >
      {props => (
        <Container>
          <Form
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            autoComplete="off"
          >
            <div
              css={css`
                margin-bottom: 2rem;
                & > * + * {
                  margin-top: 3rem;
                }
              `}
            >
              <Field type="hidden" name="form-name" />
              <Field type="hidden" name="bot-field" />
              <Input name="name" label="Name" placeholder="Jane Smith" />
              <Input
                name="email"
                label="Email"
                placeholder="jane.smith@example.com"
              />
              <Input
                textarea
                name="message"
                label="Message"
                placeholder="Please let us know if you have any special requirements, allergies, etc. Or feel free to just say hello as well! 👋"
              />
            </div>
            <SubmitButton isSubmitting={props.isSubmitting}>
              Off we go
            </SubmitButton>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
