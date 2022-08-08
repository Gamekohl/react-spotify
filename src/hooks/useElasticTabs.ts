import { MouseEvent, useState } from "react"

const useElasticTabs = () => {
    const [style, setStyle] = useState({});

    const onMouseEnter = (event: MouseEvent) => {
        const target = event.target as HTMLButtonElement;

        setStyle({
            width: target.getBoundingClientRect().width,
            height: target.getBoundingClientRect().height,
            left: target.offsetLeft,
            top: target.offsetTop
        });
    }

    return { onMouseEnter, style };
}

export default useElasticTabs;