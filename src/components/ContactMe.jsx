import React from "react";
import Offcanvas from "./OffCanvas";


export default function ContactMe()
{

    return(
        <Offcanvas
        id="ContactMeOffCanvas"
        title={"Contact Lordify"}
        content={
            <>
            <div className="d-flex align-items-center justify-content-center">
                <p>Nice One Boss</p>
            </div>
            </>
        }
        />
    )
}