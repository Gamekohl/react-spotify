import React, { CSSProperties, FunctionComponent } from 'react'
import useElasticTabs from '../../../hooks/useElasticTabs';

type ElasticTabsProps = {
    backdropStyle: CSSProperties;
    transitionDuration?: string;
    transitionTimingFunction?: string;
}

const ElasticTabs: FunctionComponent<{ children: any } & ElasticTabsProps> = ({ children, backdropStyle, ...rest }) => {
    const { transitionDuration = '.5s', transitionTimingFunction = 'cubic-bezier(.75, 0, 0, 1)' } = rest;
    const { onMouseEnter, style } = useElasticTabs();

    const onHover = onMouseEnter;

    return (
        <>
            <div style={{
                ...style,
                position: 'absolute',
                zIndex: -1,
                transitionProperty: 'all',
                transitionDuration,
                transitionTimingFunction,
                borderRadius: '500px',
                ...backdropStyle
            }} />
            {children(onHover)}
        </>
    )
}

export default ElasticTabs