import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import './ProfilePage.css';

const ProfilePage = () => {
  const user = {
    picture: 'https://res.cloudinary.com/sandeepmopidev1/image/upload/v1717124446/sandeep-profile-pic.jpg',
    name: 'Sandeep Mopidevi',
    email: 'sandeepmopidevi8537@gmail.com',
    bio: 'Full Stack Developer Trainee. Passionate about Web Development, Cyber Security and Technology.',
  };

  return (
    <div className="profile-page">
      <ProfilePicture picture={user.picture} />
      <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
    </div>
  );
};

export default ProfilePage;
