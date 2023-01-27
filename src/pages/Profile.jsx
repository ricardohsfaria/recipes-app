import React, { useContext, useEffect } from 'react';
import RecipesProvider from '../context/RecipesProvider';
import Footer from '../components/Footer';

function Profile() {
  const { setTitle } = useContext(RecipesProvider);
  useEffect(() => {
    setTitle('Profile');
  }, [setTitle]);
  return (
    <div>
      <fieldset>
        <legend>
          Profile
        </legend>
      </fieldset>
      <Footer />
    </div>
  );
}

export default Profile;
