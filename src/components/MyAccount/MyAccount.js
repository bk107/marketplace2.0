import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContextProvider';
import OneColumnTemplate from '../../templates/OneColumnTemplate/OneColumnTemplate';

export default function MyAccount() {

    const context = useContext(AppContext)

    useEffect(() => {
        if (context.user == null) {
            // context.setUser({
            //     username: "test"
            // })
        }
    }, context.user)

    return (
        <OneColumnTemplate
            title={"My Account"}
            classNames={"my-account"}
        >
            {
                context.user ?
                    <div> {context.user.username} </div> :
                    "you are not logged in"
            }
        </OneColumnTemplate>
    )
}