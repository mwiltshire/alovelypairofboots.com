import * as React from 'react';

export const RadioButton = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentProps<'input'>, 'type'>
>((props, ref) => {
  return (
    <div className="relative">
      <span className="flex items-center justify-center rounded-full h-5 w-5 border-solid-black mr-1">
        {props.checked && (
          <span className="bg-green rounded-full h-4/6 w-4/6" />
        )}
      </span>
      <input
        className="absolute inset-0 h-5 w-5 opacity-0 cursor-pointer"
        ref={ref}
        type="radio"
        {...props}
      />
    </div>
  );
});
