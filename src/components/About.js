import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import{faCoffee,faInstagram} from '@fortawesome/free-solid-svg-icons'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }

    return (
        <div className="container">
            <h1 className="my-3" style={{ textAlign: "center", color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text-Modifire gives you a way to analyze your text quickly and efficiently. Be it word count, character count and in addition to converting your text, you can remove extra spaces, reverse it, and convert your text to uppercase, lowercase, titlecase and using an alternative case, you can make the first letter capitalised and the second letter small. <br />
                            It is work with any web browser, including Chrome, Firefox, Internet Explorer, Safari, and Opera. As a result, it can be used for counting characters on Facebook, blogs, books, Excel documents, PDF documents, essays, etc.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text-Modifire is a free character counter tool that provides instant character count & word count statistics for a given text. Text-Modifire reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                        </div>
                    </div>
                </div>
                <div style={{marginTop:"75px", display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <a href="https://instagram.com/_ahmad__3_?igshid=YmMyMTA2M2Y="><i style={{marginRight:"20px",color:" #d62976"}} class="fa-3x fa-bounce fa-brands fa-square-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/muzzammil-ahmed-7559b9228"><i style={{marginRight:"20px",color:"#0A66C2"}}  class="fa-3x  fa-brands fa-linkedin fa-bounce"></i></a>
                    <a href="https://github.com/muzzammil03"><i style={{marginRight:"20px",color:"black"}}  class="fa-3x fa-bounce fa-brands fa-square-github"></i></a>
                </div>

            </div>

        </div>
    )
}
