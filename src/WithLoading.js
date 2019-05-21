import React from 'react';
import Loader from 'react-loader-spinner'



function WithLoading(MovieApp) {
  return( function WihLoadingComponent({isLoading}) {
      console.log(isLoading)
    if (isLoading) return (<MovieApp />);
    else {return (<div className="spinner"><Loader type="Ball-Triangle" color="#fff" height={80} width={80} /></div>);}
  })
}


export default WithLoading;