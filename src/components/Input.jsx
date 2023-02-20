import clsx from "clsx";

export default function Input(props) {
  const { className, placeholder, required, type = "text", ...rest } = props;

  const classNames = clsx(
    {
      input: true,
      "w-1/3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out": true,
    },
    className
  );

  return (
    <label className="leading-7 text-sm text-gray-600">
      {placeholder}
      {required && <span className="text-green-800 text-md">*</span>}
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={classNames}
          required={required}
          {...rest}
        />
      </div>
    </label>
  );
}
