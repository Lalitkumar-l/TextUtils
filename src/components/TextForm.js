import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let netText = text.toUpperCase();
        setText(netText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () => {
        let netText = text.toLowerCase();
        setText(netText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Spaces!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myText" rows="8"></textarea>
                </div>
                <button className='btn btn-primary  mx-1' onClick={handleUpClick}>Convert to UpperCase </button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase </button>
                <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text </button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text </button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Spaces </button>

                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    <h2>Your Text Summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview here"}</p>
                </div>
            </div>
        </div>
    );
}