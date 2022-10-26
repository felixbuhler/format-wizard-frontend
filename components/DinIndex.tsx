import React from 'react'
import { createClient } from "next-sanity"
import { useState } from 'react';
import Link from 'next/link'


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

                        <><div key={printDin._id}></div><Link smooth={true} href={`#${printDin?.name.replace(/\s+/g, '-').toLowerCase()}`}>{printDin?.name}</Link></>


                    ))}
                </>
            )}
            {!printDin.length > 0 && <p>:—(</p>}


        </section>
    )
}



export default DinIndex;