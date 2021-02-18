// import React from 'react';
// import MainComponent from '../components/shared/MainComponent';
// import { useRouter } from 'next/router';


// const Home: React.FC = () => {
//   const router = useRouter();

//   return (
//     <MainComponent>
//       <button onClick={() => router.push('/Auth/Login')}>Login</button>
//     </MainComponent>
//   )
// }
// export default Home;


import MainComponent from '../components/shared/MainComponent';

const Home: React.FC = () => {
  return (
    <MainComponent>
      <h1>Home</h1>
    </MainComponent>
  )
}

export default Home;