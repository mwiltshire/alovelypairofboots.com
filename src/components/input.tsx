import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useField, FieldMetaProps } from 'formik';
import { useTheme } from 'emotion-theming';
import { Theme } from '../theme';
import Tag from './tag';

type InputProps = {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
  textarea?: boolean;
};

const getBaseInputStyles = (theme: Theme, meta: FieldMetaProps<string>) => css`
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  border: none;
  margin-bottom: 0.5rem;
  background: none;
  border-radius: 0;
  transition: box-shadow 300ms ease;
  ${`border-bottom: 1px solid ${
    meta.error && meta.touched ? `${theme.colors.red300}` : 'currentColor'
  };`}
  &::placeholder {
    color: #8a7f79;
  }
  &:focus {
    outline: none;
  }
`;

const Input: FC<InputProps> = ({
  type = 'text',
  label,
  textarea = false,
  ...props
}) => {
  const theme = useTheme<Theme>();
  const [field, meta] = useField<string>(props.name);
  return (
    <div css={css('position: relative;')}>
      <label
        css={css`
          display: inline-block;
          margin-bottom: 0.5rem;
          font-weight: ${theme.fontWeights.bold};
          color: ${meta.error && meta.touched
            ? `${theme.colors.red300}`
            : 'currentColor'};
        `}
        htmlFor={props.name}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          css={css`
            ${getBaseInputStyles(theme, meta)}
            resize: vertical;
            min-height: 5rem;
          `}
          id={props.name}
          {...field}
          {...props}
        />
      ) : (
        <input
          css={css(getBaseInputStyles(theme, meta))}
          id={props.name}
          type={type}
          {...field}
          {...props}
        />
      )}
      {meta.error && meta.touched && (
        <div
          css={css`
            position: absolute;
            right: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-bottom: 1rem;
          `}
        >
          <Tag background="red300" color="white">
            {meta.error}
          </Tag>
        </div>
      )}
    </div>
  );
};

export default Input;
