import React from 'react'
import Card from '../../components/Card/Card';
import classes from './Unautorized.module.css' 

export default function Unautorized() {
  return (
    <Card className={classes["content-centre"]}>
      <h2>Error 401 -Unautorized</h2>
    </Card>
  );
}
