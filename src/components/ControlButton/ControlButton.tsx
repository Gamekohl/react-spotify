import { Tooltip } from '@mantine/core';
import React, { FunctionComponent, ReactNode } from 'react'

type ControlButtonProps = {
    icon: ReactNode;
    tooltipLabel?: string;
}
const ControlButton: FunctionComponent<ControlButtonProps> = ({ icon, tooltipLabel }) => {
    return (
        <>
            {!!tooltipLabel ? (
                <Tooltip label={tooltipLabel} withArrow transition="pop">
                    <div className="hover:text-white">
                        {icon}
                    </div>
                </Tooltip>
            ) : (
                <div className="hover:text-white">
                    {icon}
                </div>
            )
            }
        </>
    );
};

export default ControlButton;