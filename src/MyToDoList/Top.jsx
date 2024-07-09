import React, { useEffect, useState } from "react";

const Top = () => {

    //hook
    const [isTopArrow, setIsTopArrow] = useState(false);

    useEffect(() => {

        const handleIsTopArrow = () => {
            console.log('handleIsTopArrow()');
            if (window.scrollY > 200) {
                setIsTopArrow(true);

            } else {
                setIsTopArrow(false);
            }

        }
        window.addEventListener('scroll', handleIsTopArrow());
    }, []);


    //Hander

    const topArrowClikcHandler = () => {
        console.log('topArrowClikcHandler()');

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    };



    return (
        <>
            {
                isTopArrow
                    ?
                    <div id="top-arrow" onClick={topArrowClikcHandler}>
                        top
                    </div>
                    :
                    null
            }
        </>
    )

}

export default Top;