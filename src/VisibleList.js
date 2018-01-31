import React from 'react';
import {connect} from 'react-redux';

const VisibleList = ({user}) => (
  <div>
    <h2>VisibleList</h2>
    <ul>
      <li>1</li>
    </ul>

    {console.log(user)}
    </div>
);

const mapStateToProps = (state) => ({
  user: state,

})

export default connect(mapStateToProps)(VisibleList);
