import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type IconLinkType = {
    iconCode: IconProp
    link: string
}

export const IconLink = ({ iconCode, link }: IconLinkType) => (
    <div className={`d-inline-block icon-link ${iconCode}`}>
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={iconCode} className='mr-4' size='2x' />
        </a>
    </div>
)
