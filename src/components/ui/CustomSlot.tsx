import React from "react";

interface CustomSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CustomSlot = React.forwardRef<HTMLElement, CustomSlotProps>(
  (props, forwardedRef) => {
    const { children, ...slotProps } = props;

    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...slotProps,
        //@ts-expect-error ref warning is expected
        ref: forwardedRef,
      });
    }

    return React.Children.count(children) > 1
      ? React.Children.only(null)
      : children;
  }
);

CustomSlot.displayName = "CustomSlot";
const Root = CustomSlot;
export { CustomSlot, Root };
