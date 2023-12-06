import React from 'react'
import Vara from 'vara';

export default function VaraText({ text }: { text: string }) {
    React.useEffect(() => {
        var vara = new Vara(
            "#vara-container",
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
            [
                {
                    text: 'About Me',
                    fontSize: 50,
                    strokeWidth: 1.4,
                    color: 'white',

                  },
            ]
        );
    }, []);

    return <div id="vara-container" className="z-[0] flex justify-center"></div>;
}

