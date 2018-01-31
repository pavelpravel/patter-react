import React, { Component } from 'react';

class FormUser extends Component {

  render() {
    let input;




    const onSubmitForm = (e) =>{
      e.preventDefault()
      const example = {

          name: input.value,

        
      }
      this.props.onSubmit(example)


    }

    return (

        <form onSubmit={onSubmitForm}>
          <input
            ref={node => {
                input = node
              }}
            />

          <button type="submit"></button>


        </form>


    );
  }

}

export default FormUser;
