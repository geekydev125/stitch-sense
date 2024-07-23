import { ITeamMember } from "@/types/types"
import Image from "next/image"

interface Props {
    teamMember: ITeamMember
}
362/486
function TeamCard({
    teamMember
}: Props) {
    return (
        <div className="flex flex-col items-center">
            <Image src={`/assets/img/team/${teamMember.image}`} alt={`${teamMember.firstName} ${teamMember.lastName}`} width={362} height={486} />

            <div className="mt-5">
                <h3 className="text-3xl sm:text-2xl lg:text-3xl text-center ">{teamMember.firstName} {teamMember.lastName}</h3>

                <p className="text-center">{teamMember.position}</p>
            </div>
        </div>
    )
}

export default TeamCard