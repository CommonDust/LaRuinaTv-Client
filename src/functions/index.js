/* -------------------CSS------------------- */

export const BodyCss= () => {
    return (
        document.querySelector('body').style.overflowY="scroll"
    )
}

export default function OptionCanvas(){
    BodyCss()
    document.querySelector(`.bodyApp`).style.transitionDuration='2s'
    document.querySelector(`.bodyApp`).style.transform='translateX(-100vw)'
    document.querySelector(`.browserBody`).style.height='100vh'
    document.querySelector(`.browserBody`).style.overflowY='hidden'
    document.querySelector(`#optionProfileBtn0`).style.transform='translateX(200px)'
    document.querySelector(`#optionProfileBtn1`).style.transform='translateX(200px)'
    document.querySelector(`#optionProfileBtn2`).style.transform='translateX(200px)'
    document.querySelector(`#optionProfileBtn3`).style.transform='translateX(200px)'
    document.querySelector(`#optionProfileBtn0`).style.scale='0'
    document.querySelector(`#optionProfileBtn1`).style.scale='0'
    document.querySelector(`#optionProfileBtn2`).style.scale='0'
    document.querySelector(`#optionProfileBtn3`).style.scale='0'
}

