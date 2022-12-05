function buttons(){
    return(
    <div>
        <button onClick={readEvent}>1st Useless button</button>
        <button onClick={readEvent}>2nd Useless button</button>
    </div>
    )
    function readEvent(e) {
        console.log(e.target.textContent)
        return e.target.textContent == '1st Useless button' ? alert('1st useless msg') : alert('2nd useless msg')
    }
}


export default buttons


