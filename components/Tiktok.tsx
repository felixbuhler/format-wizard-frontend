import React from 'react'
import { createClient } from "next-sanity";


const client = createClient({
    projectId: "w9dvy0j8",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
});

const digitalTikTok = await client.fetch(`*[_type == "digitalTikTok"]`);

export async function getStaticProps() {
    const digitalTikTok = [
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
            digitalTikTok
        }
    };
}




function TikTok() {



    return (
        <section id="instagram">

            <div className='bubblewrap sticky'>
                <h3 className='bubble'>TikTok</h3>
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


            {digitalTikTok.length > 0 && (
                <>
                    {digitalTikTok.map((digitalTikTok) => (
                        <article className='entry' key={digitalTikTok._id}>


                            <div class="entry-content">
                                <div class="column">

                                </div>
                                <div class="column headline">
                                    <div className='bubblewrap sticky' >
                                        <h4 className='bubble'>{digitalTikTok?.name}</h4>
                                    </div>
                                </div>
                                <div class="column text">
                                    <div class="text-column">
                                        <div class="paper A4" style={{ width: digitalTikTok?.width * process.env.unitSize + "px", height: digitalTikTok?.height * process.env.unitSize + "px" }}></div>
                                    </div>
                                    <div class="text-column">
                                        <h5>{digitalTikTok?.name}</h5>
                                        <div class="info">
                                            <h6>Recommended Size</h6>
                                            <p>{digitalTikTok?.width} &times; {digitalTikTok?.height} px</p>
                                        </div>
                                        <div class="info">
                                            <h6>Aspect Ratio</h6>
                                            <p>{digitalTikTok?.aspectRatio}</p>
                                        </div>


                                        {digitalTikTok?.colorSpace > 0 && (

                                            <div class="info">
                                                <h6>Frames Per Second</h6>
                                                <p>{digitalTikTok?.colorSpace} fps</p>
                                            </div>
                                        )}



                                        {digitalTikTok?.lengthSec > 0 && (
                                            <div class="info">
                                                <h6>Length</h6>
                                                <p>{digitalTikTok?.lengthSec} Seconds</p>
                                            </div>
                                        )}
                                        {digitalTikTok?.fps > 0 && (

                                            <div class="info">
                                                <h6>Frames Per Second</h6>
                                                <p>{digitalTikTok?.fps} fps</p>
                                            </div>
                                        )}
                                        {digitalTikTok?.maxFileSize > 0 && (

                                            <div class="info">
                                                <h6>Max. File Size</h6>
                                                <p>{digitalTikTok?.maxFileSize}</p>
                                            </div>
                                        )}

                                        {digitalTikTok?.helpfulLinks > 0 && (

                                            <div class="info">
                                                <h6>Helpful Content</h6>
                                                <p>{digitalTikTok?.helpfulLinks}</p>
                                            </div>
                                        )}
                                    </div>


                                </div>
                            </div>
                        </article>


                    ))}
                </>
            )}
            {!digitalTikTok.length > 0 && <p>No animals to show</p>}


        </section>
    )
}



export default TikTok;