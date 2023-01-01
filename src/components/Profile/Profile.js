import React from 'react'
import { ListGroup } from "react-bootstrap";
import PlaceholderComponent from '../PlaceholderComponent/PlaceholderComponent';
import Card from "../Card/Card";
import classes from "./Profile.module.css";

const Profile = ({ user, isLoading }) => {

  return (
    <Card className={classes.profile}>
      <h2>Profile</h2>
      {isLoading && <PlaceholderComponent />}
      {!isLoading && (
        <ListGroup variant="flush">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">User:</div>
              {`${user.first_name} ${user.last_name}`}
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Email:</div>
              {` ${user.email}`}
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Created:</div>
              {`${new Date(user.createdAt)}`}
            </div>
          </ListGroup.Item>
        </ListGroup>
      )}
    </Card>
  );
};
export default Profile;