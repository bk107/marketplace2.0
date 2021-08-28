import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContextProvider';
import OneColumnTemplate from '../../templates/OneColumnTemplate/OneColumnTemplate';

export default function MyAccount() {

    const context = useContext(AppContext)

    const handleUserChange = () => {
        console.log("context.user changed", context.user);
    }

    useEffect(handleUserChange, context.user)

    const MainContent =
        context.user ?
            <div> {context.user.username} </div> :
            "you are not logged in"



    return (
        <OneColumnTemplate
            title={"My Account"}
            classNames={"my-account"}
        >
            {MainContent}
        </OneColumnTemplate>
    )
}