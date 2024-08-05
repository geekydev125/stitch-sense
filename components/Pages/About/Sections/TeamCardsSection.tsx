import uniqid from "uniqid";

import { ITeamMember } from "@/types/types";

import team from "@/data/team.json";

import TeamCard from "@/components/Cards/TeamCard/TeamCard";

function TeamCardsSection() {
    return (
        <section className="container flex flex-col sm:flex-row gap-4 sm:gap-2 md:gap-4">
            {
                (team as ITeamMember[]).map(teamMember => {
                    return <TeamCard key={uniqid()} teamMember={teamMember} />
                })
            }
        </section>
    )
}

export default TeamCardsSection