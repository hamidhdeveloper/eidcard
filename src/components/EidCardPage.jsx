import React from 'react';
import logo from '../assets/images/logo.png';
import card from '../assets/images/card.png';
import user from '../assets/images/user.png';
import eidcard from '../assets/images/eidcard.png';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';




class EidCardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: '',
          contentVisible: false // Initially content is not visible
        };
      }

  displayEidCard = () => {
    
     // Extract the user's name from state
     const { userName } = this.state;

     // Render the name dynamically within the JSX
     this.setState({ userName, contentVisible: true }, () => {
       // Take a screenshot of the content with id "content"
       html2canvas(document.getElementById('content')).then(canvas => {
         // Convert the canvas to a data URL
         const dataURL = canvas.toDataURL();
 
         // Save the data URL as a file using FileSaver.js
         saveAs(dataURL, 'eid_card.png');
 
         // Hide the content again after taking the screenshot
         this.setState({ contentVisible: false });
       });
     });

  };

  handleInputChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <header>
          <img src={logo} alt="80z Coffee Logo" className="logo" />
        </header>
        <main>
          <h1>هني أحبائك مع ايت اوز</h1>
          <h2>احصل على تصميم المعايدة الإلكترونية باسمك</h2>
          <p>وعيد عليهم بالخصم القوي على القهوة اللذيذة و البينك ليمونيد المنعش</p>
          <div className="image-container">
            <img src={card} alt="Eid Greeting" />
          </div>
          <div className="input-group">
            <div className="input-wrapper">
              <img src={user} alt="User Icon" className="user-icon" />
              <input
                id="userName"
                type="text"
                placeholder="اكتب اسمك... مثال محمد عبد الله"
                value={this.state.userName}
                onChange={this.handleInputChange}
              />
            </div>
            <button onClick={this.displayEidCard}>ارسال</button>
          </div>
        </main>
        <footer>
          <p>copyright © 2024, all rights reserved for 80z Coffee</p>
        </footer>
        {/* Dynamically toggle the visibility of the content */}
        {this.state.contentVisible && (
          <div id="content">
            {/* Dynamically rendering the name */}
            <div style={{ position: 'absolute', top: '124px', width: 'auto', color: 'white', textAlign: 'right', padding: '2px 16px 7px 13px', fontSize: '18px',  borderRadius: '10px',  background: '#403f3e' }}>
              {this.state.userName}
            </div>
            {/* Your Eid Card image will be displayed here */}
            <img id="eidCard" src={eidcard} alt="Eid Card" />
          </div>
        )}
      </div>
    );
  }
}

export default EidCardPage;
