
interface Props {
    className?: string
    isDisabled?: boolean
    isLoading?: boolean
    children: React.ReactNode
}

function SubmitButton({
    className,
    isDisabled,
    isLoading,
    children
}:Props) {
    return (
        <button disabled={isDisabled || isLoading} className={`btn btn-primary text-white rounded-lg px-8 drop-shadow-md uppercase ${className}`}>
            {children}
        </button>
    )
}

export default SubmitButton