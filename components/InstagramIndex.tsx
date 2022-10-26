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

const digitalInstagram = await client.fetch(`*[_type == "digitalInstagram"]`);

export async function getStaticProps() {
    const digitalInstagram = [

    ];

    return {
        props: {
            digitalInstagram
        }
    };
}



function InstagramIndex() {

  

    return (



        <section>


            {digitalInstagram.length > 0 && (



                <>


                    {digitalInstagram.map((digitalInstagram) => (

                        <><div key={digitalInstagram._id}></div><Link smooth={true} href={`#${digitalInstagram?.name.replace(/\s+/g, '-').toLowerCase()}`}>{digitalInstagram?.name}</Link></>


                    ))}
                </>
            )}
            {!digitalInstagram.length > 0 && <p>:—(</p>}


        </section>
    )
}



export default InstagramIndex;