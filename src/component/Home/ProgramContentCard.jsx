import Image from 'next/image'
import React from 'react'

const ProgramContentCard = ({ title, des, img,color }) => {
    return (
        <>
            <div className="program-content-card">
                <div>
                    <p className="program-content-para">{title}</p>
                    <h6 className="program-content-heading">{des}</h6>
                </div>
                <Image alt="" src={img} />
            </div>
        </>
    )
}

export default ProgramContentCard