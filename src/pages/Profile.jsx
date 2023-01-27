import React, { useContext, useEffect } from 'react';
import RecipesProvider from '../context/RecipesProvider';

function Profile() {
  const { setTitle } = useContext(RecipesProvider);
  useEffect(() => {
    setTitle('Profile');
  }, [setTitle]);
  return (
    <div>Profile</div>
  );
}

export default Profile;
