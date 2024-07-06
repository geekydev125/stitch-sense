import uniqid from "uniqid";

import clients from "@/data/clients.json";
import { IClient } from "@/types/types";
import Image from "next/image";

function OurClientsSection() {
    return (
        <section className="bg-black py-10 mb-10">
            <div className="container">
                <h3 className="text-center text-light text-5xl uppercase mb-5">Our clients</h3>
                
                <hr className="border-white my-2" />

                <div className="flex justify-around items-center">
                    {
                        (clients as IClient[]).map((client) => (
                            <Image key={uniqid()} src={`/assets/img/logos/${client.logo}`} alt={client.name} width={228} height={228} />

                        ))
                    }
                </div>

                <hr className="border-white my-2" />
            </div>
        </section>
    )
}

export default OurClientsSection