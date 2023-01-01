import React from 'react'
import Card from '../../components/Card/Card'
import classes from './NotFound.module.css'

export default function NotFound() {
  return (
    <Card className={classes['content-centre']}>
      <h2>Error 404 - Page Not Found</h2>
    </Card>
  );
}
