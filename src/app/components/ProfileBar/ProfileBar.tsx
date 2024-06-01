import React from 'react';
import './ProfileBar.css';
import Image from 'next/image';

const ProfileBar = () => {
  return (
    <div className="ProfileBar">
      <div className="profileImages">
        <div className="profileImageContainer redGrid grid1">
          <Image src="/profile.png" alt="Profile 1" width={150} height={150} className="profileImage profileImage1" />
          <span className="onlineDot"></span>
          <p className="profileName">John Doe</p>
          <p className="profileCareer">Software Engineer</p> 
        </div>
        <div className="profileImageContainer greenGrid grid2">
          <Image src="/profile2.png" alt="Profile 2" width={150} height={150} className="profileImage profileImage2"  />
          <span className="onlineDot"></span>
          <p className="profileName">Jane Smith</p>
          <p className="profileCareer">Graphic Designer</p> 
        </div>
      </div>
      <div className="textContent">
        <h1 className="textBold">Become a<br />authorised seller</h1>
        <h2>Hook Users Reported better living outlings</h2>
        <ul>
          <li><span className="checkmark">✔</span> Manage shopping</li>
          <li><span className="checkmark">✔</span> Chat with friends</li>
          <li><span className="checkmark">✔</span> Pay bills</li>
        </ul>
        <button className="actionButton">Create Seller profile</button>
      </div>
    </div>
  );
};
export default ProfileBar;


