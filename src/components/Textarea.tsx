import * as React from 'react';

interface TextAreaProps extends React.ComponentProps<'textarea'> {
  validationError?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ validationError, ...rest }, ref) => {
    const borderClass = validationError
      ? 'border-solid-red'
      : 'border-solid-black';

    return (
      <div className="flex relative">
        <textarea
          className={`w-full outline-none p-2 resize-none min-h-[5rem] text-inherit text-base rounded-none ${borderClass} placeholder:text-gray`}
          ref={ref}
          {...rest}
        />
        {validationError && (
          <div className="absolute top-full right-0 p-1 text-white bg-red">
            {validationError}
          </div>
        )}
      </div>
    );
  }
);
