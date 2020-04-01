import React from 'react';
import Boxtop from './boxtop';
import Boxbottom from './boxbottom';
import Hotels from './Hotels';

class Hotelsbox extends React.Component {
  render() {
    return (
      <div>
        <Boxtop
          head="Save more on your next hotel"
          sub="Thousands of deals made every day"
        />

        <Hotels />
      </div>
    );
  }
}

export default Hotelsbox;
