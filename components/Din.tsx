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




function Din() {







    return (
        <section id="din">

            <div className='bubblewrap sticky'>
                <h3 className='bubble bg-orange'>DIN</h3>
            </div>

            <div class="section-intro-text">
                Die Deutsche Norm, die auf Walter Porstmann zurückgeht, diente mit ihren Festlegungen über die A‐ und B‐Reihe[13] als Grundlage für das europäische und internationale Äquivalent EN ISO 216, das wiederum in fast allen Ländern adaptiert worden ist. Unterschiede gibt es meist nur in den erlaubten Toleranzen. Als rein nationale Norm ist DIN 476-2:2008-02 Papier-Endformate – C‐Reihe noch gültig.
            </div>


            {printDin.length > 0 && (



                <>


                    {printDin.map((printDin) => (
                        <article className='entry' id={printDin?.name.replace(/\s+/g, '-').toLowerCase()} key={printDin._id}>


                            <div className='entry-content'>
                                <div className='column'>

                                </div>
                                <div className='column headline'>
                                    <div className='bubblewrap sticky' >
                                        <h4 className='bubble'>{printDin?.name}</h4>
                                    </div>
                                </div>
                                <div className='column text'>
                                    <div className='text-column'>
                                        <div className='paper' style={{ width: printDin?.width * process.env.unitSize + "px", height: printDin?.height * process.env.unitSize + "px" }}></div>
                                    </div>
                                    <div className='text-column'>
                                        <h5>{printDin?.name}</h5>
                                        <div className='info'>
                                            <h6>Size</h6>
                                            <p>{printDin?.width} &times; {printDin?.height} mm</p>
                                        </div>


                                        {printDin?.usage && (printDin?.usage.length !== 0) && (

                                            <div className='info'>
                                                <h6>Usage</h6>
                                                <p>{printDin?.usage}</p>
                                            </div>
                                        )}

                                        <div className='info'>
                                            <h6>Pixel at <br></br> 300 dpi</h6>
                                            <p>{printDin?.pixelWidth} &times; {printDin?.pixelHeight} px</p>
                                        </div>


                                        {printDin?.exampleProjects && (printDin?.exampleProjects.length !== 0) && (

                                            <div className='info'>
                                                <h6>Example Projects</h6>
                                                <p>{printDin?.exampleProjects}</p>
                                            </div>
                                        )}
                                    </div>


                                </div>
                            </div>
                        </article>


                    ))}
                </>
            )}
            {!printDin.length > 0 && <p>:—(</p>}


        </section>
    )
}



export default Din;