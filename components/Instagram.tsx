import React from 'react'
import { createClient } from "next-sanity";


const client = createClient({
    projectId: "w9dvy0j8",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
});

const digitalInstagram = await client.fetch(`*[_type == "digitalInstagram"]`);

export async function getStaticProps() {
    const digitalInstagram = [
        /* {
          _createdAt: "2022-03-08T09:28:00Z",
          _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
          _rev: "xnBg0xhUDzo561jnWODd5e",
          _type: "animal",
          _updatedAt: "2022-03-08T09:28:00Z",
          name: "Capybara"
        } */
    ];

    return {
        props: {
            digitalInstagram
        }
    };
}




function Instagram() {



    return (
        <section id="instagram">

            <div className='bubblewrap sticky'>
                <h3 className='bubble'>Instagram</h3>
            </div>

            <div class="section-intro-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea
                takimata sanctus est Lorem ipsum dolor sit amet.
            </div>


            {digitalInstagram.length > 0 && (
                <>
                    {digitalInstagram.map((digitalInstagram) => (
                        <article className='entry' key={digitalInstagram._id}>


                            <div class="entry-content">
                                <div class="column">

                                </div>
                                <div class="column headline">
                                    <div className='bubblewrap sticky' >
                                        <h4 className='bubble'>{digitalInstagram?.name}</h4>
                                    </div>
                                </div>
                                <div class="column text">
                                    <div class="text-column">
                                        <div class="paper A4" style={{ width: digitalInstagram?.width * process.env.unitSize + "px", height: digitalInstagram?.height * process.env.unitSize + "px" }}></div>
                                    </div>
                                    <div class="text-column">
                                        <h5>{digitalInstagram?.name}</h5>
                                        <div class="info">
                                            <h6>Size</h6>
                                            <p>{digitalInstagram?.width} &times; {digitalInstagram?.height} mm</p>
                                        </div>
                                        <div class="info">
                                            <h6>Usage</h6>
                                            <p>{digitalInstagram?.usage}</p>
                                        </div>
                                        <div class="info">
                                            <h6>Pixel at 300 dpi</h6>
                                            <p>{digitalInstagram?.pixelWidth} &times; {digitalInstagram?.pixelHeight} px</p>
                                        </div>
                                        <div class="info">
                                            <h6>Area in sqm</h6>
                                            <p>XXX</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </article>


                    ))}
                </>
            )}
            {!digitalInstagram.length > 0 && <p>No animals to show</p>}


        </section>
    )
}



export default Instagram;