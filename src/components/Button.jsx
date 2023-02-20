import clsx from "clsx";

export default function Button(props) {
  const { children, remove, primary, outline, className, ...rest } = props;

  const classNames = clsx(
    {
      "btn-default": !outline,
      "btn-outline": outline,
      " text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-sm":
        primary,

      "text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-sm mt-10 sm:mt-0":
        remove,
    },
    className
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}
