import React, { useState } from 'react';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    image: ''
  });

  const handleSubmit = (e) => {
    

   
  };

  return (
    <div className='fullpart'>
      <div className="buttonpart">
        <button onClick={() => setShowForm(true)} className='profilebutton'>
          Add Personal Info
        </button>
      </div>

      <div className=" backgroundpart">
        <div className="contentcard">
          <h2 className="congratshead">Profile Page</h2>
          <div className="profile">
            <img
              src={personalInfo.image || "https://randomuser.me/api/portraits/men/75.jpg"}
              alt="Profile"
              className="profile-pic"
            />
            <h4 className="name">{personalInfo.name}</h4>
            <p className="useremail">{personalInfo.email}</p>
            <p className='userphonenumber'>{personalInfo.phone}</p>
            <p className='userLocation'>{personalInfo.location}</p>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
            alt="Gift"
            className="gift-img"
          />
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className='cancelbuttonarea'>
              <button type="button" className='profilebutton' onClick={() => setShowForm(false)}>X</button>
            </div>
            <h3 className='textclr'>Add Personal Data</h3>
            <form onSubmit={handleSubmit} id="personalInfoForm">
              <div>
                <label>Name:</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="tel" name="phone" required />
              </div>
              <div>
                <label>Location:</label>
                <input type="text" name="location" required />
              </div>
              <div>
                <label>Upload Image:</label>
                <input type="file" name="image" accept="image/*" />
              </div>
              <button type="submit" className='submitbtn'>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
