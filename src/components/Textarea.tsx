import * as React from 'react';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>((props, ref) => {
  return (
    <textarea
      className="w-full outline-none p-2 resize-none min-h-[5rem] text-inherit text-sm border-solid-black placeholder:text-gray"
      ref={ref}
      {...props}
    />
  );
});
