interface Props extends IemployeeCard {}

function EmployeeCard({
    firstName,
    lastName,
    position,
    imageSrc
}:Props) {
  return (
    <div>EmployeeCard</div>
  )
}

export default EmployeeCard