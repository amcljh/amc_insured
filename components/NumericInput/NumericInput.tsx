import { NumericInputProps } from "./type";

const NumericInput = ({ id, label, className, style, ...props }: NumericInputProps) => {
  return (
    <div className={className} style={style}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input type="number" id={id} inputMode="numeric" pattern="[0-9]*" {...props} />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">%</span>
        </div>
      </div>
    </div>
  )
}

export default NumericInput;