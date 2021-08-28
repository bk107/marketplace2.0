import React from 'react'

export default function TwoColumnTemplate(
    {
        orientation = 1,
        title,
        leftContent,
        leftContentStyle,
        rightContent,
        rightContentStyle,
        classNames
    }
) {


    const getTitle = () => {

        let titleContent = ""

        if (title) {
            titleContent = (
                <div className="title">
                    <h1> {title} </h1>
                </div>
            )
        }

        return titleContent;

    }


    return (
        <div className={classNames}>
            {getTitle()}
            <div className="c flex">
                <div className={`left-content ${orientation === 1 ? 'flex-2' : 'flex-1'}`} style={leftContentStyle}>
                    {leftContent}
                </div>
                <div className={`left-content ${orientation === 1 ? 'flex-1' : 'flex-2'}`} style={rightContentStyle}>
                    {rightContent}
                </div>
            </div>
        </div>
    )
}