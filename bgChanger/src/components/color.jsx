import './styles/color.css'

export default function Colors({changeColor}) {
    
    return (
        <>
        <div className="color-container">
            <div className="color-card">
                <div className="colors">
                    <div className="color" id="black" onClick={() => {changeColor('black')}}>black</div>
                    <div className="color" id="white" onClick={() => {changeColor('white')}}>white</div>
                    <div className="color" id="red" onClick={() => {changeColor('red')}}>red</div>
                    <div className="color" id="blue" onClick={() => {changeColor('blue')}}>blue</div>
                    <div className="color" id="green" onClick={() => {changeColor('green')}}>green</div>
                    <div className="color" id="orange" onClick={() => {changeColor('orange')}}>orange</div>
                    <div className="color" id="pink" onClick={() => {changeColor('pink')}}>pink</div>
                    <div className="color" id="yellow" onClick={() => {changeColor('yellow')}}>yellow</div>
                </div>
            </div>
        </div>
        </>
    )
}