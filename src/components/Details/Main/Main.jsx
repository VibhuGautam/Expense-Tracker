import classes from '*.module.css'
import { Card, CardHeader } from '@material-ui/core'
import React from 'react'

const main = () => {
    return (
       <Card className = {classes.root}>
           <CardHeader title = "Expense Tracker" subheader = "Powered by Speechly" />
       </Card>
    )
}

export default main
