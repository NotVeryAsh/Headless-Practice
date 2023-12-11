const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} w-3/12 mx-auto bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 rounded-xl text-white py-2`}
        {...props}
    />
)

export default Button
