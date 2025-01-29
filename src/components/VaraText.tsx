import React from 'react'
import Vara from 'vara';

type InputProps  = {
    text: string
    contName: string
    fontSize: number
}
export default function VaraText({text, contName, fontSize}: InputProps) {
    React.useEffect(() => {
        var vara = new Vara(
            `#${contName}`,
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
            [
                {
                    text: text,
                    fontSize: fontSize,
                    strokeWidth: 1.4,
                    color: 'white',
                    textAlign: 'center'

                  },
            ]
        );
        console.log(vara);
    }, [contName, fontSize, text]);

    return <div id={`${contName}`} className="z-[0] flex justify-center"></div>;
}

