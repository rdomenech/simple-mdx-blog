import React from "react"
import {ButtonWrapper} from "../elements"

export const Buttton = ({children, href}) => {
    return <ButtonWrapper to={href}>
        {children}
    </ButtonWrapper>
}