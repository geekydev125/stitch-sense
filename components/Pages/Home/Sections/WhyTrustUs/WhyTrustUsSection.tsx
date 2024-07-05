import SecondaryTitle from "@/components/Common/Titles/SecondaryTitle"
import SectionTitle from "@/components/Common/Titles/SectionTitle"
import ClientCards from "./ClientCards"
import EmployeesCards from "./EmployeesCards"

function WhyTrustUsSection() {
    return (
        <section className="container">
            <SectionTitle>Why trust us?</SectionTitle>

            <SecondaryTitle>Our impact on you</SecondaryTitle>

            <ClientCards />

            <SecondaryTitle>Our impact on employees</SecondaryTitle>

            <EmployeesCards />
            
        </section>
    )
}

export default WhyTrustUsSection