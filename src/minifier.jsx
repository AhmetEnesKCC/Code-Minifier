import React  from 'react';
import "./css/main.css"
import copy from "./Images/copy.png"
import {CopyToClipboard} from "react-copy-to-clipboard"


class Minifier extends React.Component {
  state= {
    inputData: "",
    copied: false,
  }
  takeData = async (e) => {
    e.preventDefault();
    var data =  e.target.elements.data.value;
    this.setState({
      inputData:data,
    })
  }

  alertCopied() {
    document.getElementsByClassName("succesfull")[0].style.display = "block";
    setTimeout(() => {
      document.getElementsByClassName("succesfull")[0].style.display = "none"},400
    );
  }
  toolTip() {
    //if (document.getElementsByClassName("copyImg"))
    document.getElementsByClassName("toolTip")[0].style.display = "block"
    setTimeout(() => {
      document.getElementsByClassName("toolTip")[0].style.display = "none"}, 600
    )
  }
  
  render() {
    return (
      <div className="container">
        <div className="succesfull">
          <div className="copied">COPIED</div>
        </div>
        <div className="top">
          <div className="siteName">
            <h1>MINIFIER</h1>
          </div>

        </div>
        <div className="minifierInput">
          <div className="inputBox">
            <form onSubmit={this.takeData}>
            <textarea  name="data" placeholder="Put Your  CODE HERE"  rows="10" cols="50" className="input"></textarea>
            <button className="btn">
            <p  className="convert">ReScale</p>
            </button>  
            </form>
          </div>
                 
        </div>
        <div className="minifierOutput">
          <div className="outputBox">
            <textarea disabled onChange={({target: {inputData}}) => this.setState({inputData, copied: false})} value={this.state.inputData.replace(/\s/g, '')} className="result"></textarea>
          </div>
          
          <div >
          <CopyToClipboard   text={this.state.inputData} onCopy={() => this.setState({copied:true})} className="copyImage">
            <div>
            <span   className="toolTip">COPY</span> 
            <img onMouseOver={this.toolTip} onClick={this.alertCopied}  className="copyImg" src={copy} alt="copy"/>
            </div>
            
          </CopyToClipboard>
          </div>
          
        </div>
      </div>
    )
  }
}
export default Minifier