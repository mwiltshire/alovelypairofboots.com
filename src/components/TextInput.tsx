import * as React from 'react';

interface TextInputProps extends React.ComponentProps<'input'> {
  validationError?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ validationError, ...rest }, ref) => {
    const borderClass = validationError
      ? 'border-solid-red'
      : 'border-solid-black';

    return (
      <div className="relative">
        <input
          className={`w-full p-2 text-inherit outline-none text-sm ${borderClass} placeholder:text-gray`}
          type="text"
          ref={ref}
          {...rest}
        />
        {validationError && (
          <div className="absolute right-0 p-1 text-white bg-red">
            {validationError}
          </div>
        )}
      </div>
    );
  }
);
