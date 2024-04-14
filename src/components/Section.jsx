import '../App.css';

const Section = ({text , setText , convertTexttoSpeech}) =>{
    return(
        <div className="section">
            <textarea 
                value={text}
                onChange={(E) => setText(E.target.value)}
            />
            <button className='btn-convert' 
            onClick={(e) => convertTexttoSpeech()}>
                Click here to convert
                </button>
        </div>

    )
        
    
}
export default Section;