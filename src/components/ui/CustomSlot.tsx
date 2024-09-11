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

    if (typeof children === "string") {
      return <>{children}</>;
    }

    //there are many reasons for the clildren being invalid, and one is that there are more than one child,so this below code is to handle that
    return React.Children.count(children) > 1
      ? React.Children.only(null)
      : null;
  }
);

CustomSlot.displayName = "CustomSlot";
const Root = CustomSlot;
export { CustomSlot, Root };
