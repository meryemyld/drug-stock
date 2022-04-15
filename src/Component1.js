import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { ListGroup, ListGroupItem, Input, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';



export default class component1 extends Component {

  render() {
    return (
      <div>


        <Row>
          <Col xs="8">
            <Input
              id="searc_bar"
              name="search_bar"
              placeholder="Ürün arayın"
              type="text"

            />
          </Col>
          <Col xs="2">
            <Button color="success" onClick={function noRefCheck() { }}>
              Ara
            </Button>
          </Col>

          <Modal toggle={function noRefCheck() { }}>
            <ModalHeader
              close={<button className="close" onClick={function noRefCheck() { }}>×</button>}
              toggle={function noRefCheck() { }}
            >
              Modal title
            </ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={function noRefCheck() { }}
              >
                Do Something
              </Button>
              {' '}
              <Button onClick={function noRefCheck() { }}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

        </Row>



      </div>
    )
  }
}
