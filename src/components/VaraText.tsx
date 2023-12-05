import React from 'react'
import Vara from 'vara';

export default function VaraText({ text }: { text: string }) {
    React.useEffect(() => {
        var vara = new Vara(
            "#vara-container",
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
            [
                {
                    text: text,
                    fontSize: 140,
                    strokeWidth: 1,
                    color: 'white',
                  },
            ]
        );
    }, []);

    return <div id="vara-container" className="z-[20]"></div>;
}

