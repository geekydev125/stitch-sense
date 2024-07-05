interface Props {
    children: React.ReactNode
}

function ClientEmployeesCardsWrapper({
    children
}: Props) {
  return (
    <div className='flex flex-col items-center sm:flex-row sm:items-stretch gap-4 mb-10 '>
        {children}
    </div>
  )
}

export default ClientEmployeesCardsWrapper