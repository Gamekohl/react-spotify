import { Tooltip } from '@mantine/core';
import React, { FunctionComponent, HTMLProps, ReactNode } from 'react'

type ControlButtonProps = {
    icon: ReactNode;
    tooltipLabel?: string;
}
const ControlButton: FunctionComponent<ControlButtonProps & HTMLProps<HTMLDivElement>> = ({ icon, tooltipLabel, ...props }) => {
    return (
        <>
            {!!tooltipLabel ? (
                <Tooltip label={tooltipLabel} withArrow transition="pop">
                    <div className="hover:text-white" {...props}>
                        {icon}
                    </div>
                </Tooltip>
            ) : (
                <div className="hover:text-white" {...props}>
                    {icon}
                </div>
            )
            }
        </>
    );
};

export default ControlButton;