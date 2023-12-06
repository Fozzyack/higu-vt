import React from 'react'
import Vara from 'vara';

type InputProps  = {
    text: string
    contName: string
}
export default function VaraText({text, contName}: InputProps) {
    React.useEffect(() => {
        var vara = new Vara(
            `#${contName}`,
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
            [
                {
                    text: text,
                    fontSize: 50,
                    strokeWidth: 1.4,
                    color: 'white',
                    textAlign: 'center'

                  },
            ]
        );
    }, []);

    return <div id={`${contName}`} className="z-[0] flex justify-center"></div>;
}

