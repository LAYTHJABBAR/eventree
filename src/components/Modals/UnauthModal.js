import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { closeModal, openModal } from "./modalActions";

const actions = { closeModal, openModal };

class UnauthModal extends Component {
  handleCloseModal = () => {
    if (this.props.location.pathname.includes("event")) {
      this.props.closeModal();
    } else {
      this.props.history.goBack();
      this.props.closeModal();
    }
  };

  render() {
    const { openModal } = this.props;
    return (
      <Modal size="mini" open={true} onClose={this.handleCloseModal}>
        <Modal.Header style={{color: 'purple'}}>Please Sign In First!!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>Please either login or register to see this page</p>

            <div class="ui one column stackable center aligned page grid">
   <div class="column twelve wide">
     
          <Button.Group class="ui center aligned" >
              <Button
            
                floated
                color="purple"
                onClick={() => openModal("LoginModal")}
               
              >
                Login
              </Button>
              <Button.Or />
              <Button 
            floated
               color='red' onClick={() => openModal("RegisterModal")}>
                Register
              </Button>
              </Button.Group>
   </div>
</div>
           
         
            <div style={{ textAlign: "center" }}>
              <p>Or click cancel to continue as a guest</p>
              <Button circular onClick={this.handleCloseModal}>Cancel</Button>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default withRouter(connect(null, actions)(UnauthModal));
