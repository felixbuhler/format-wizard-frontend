import React from 'react'
import { createClient } from "next-sanity";


const client = createClient({
    projectId: "w9dvy0j8",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
});

const printDin = await client.fetch(`*[_type == "printDin"]`);

export async function getStaticProps() {
    const printDin = [

    ];

    return {
        props: {
            printDin
        }
    };
}




function DinIndex() {
    return (
        <section>


            {printDin.length > 0 && (



                <>


                    {printDin.map((printDin) => (

                        <div>{printDin?.name}</div>



                    ))}
                </>
            )}
            {!printDin.length > 0 && <p>:—(</p>}


        </section>
    )
}



export default DinIndex;