import React, { Component } from 'react';
import BundleSave from './BundleSave';
import Boxtop from './boxtop';
import Boxbottom from './boxbottom';

class BundleSaveBox extends React.Component {
  render() {
    return (
      <div>
        <Boxtop
          head="Looking to save on your hotel and flight?"
          sub="We compare thousands of deals to get you there"
        />
        <BundleSave />

        <Boxbottom footerb="Save up to $625 when you book your hotel and flight together!  " />
      </div>
    );
  }
}

export default BundleSaveBox;
