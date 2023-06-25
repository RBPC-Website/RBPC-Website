const blob = document.getElementById("blob")

document.body.onpointermove = event => {
    const { pageX, pageY }= event;

    blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
    }, {duration: 3000, fill: 'forwards'})
}

export default function GlowyBlob() {
    return (
        <section>
            <div id="blob"></div>
        </section>
    )
}