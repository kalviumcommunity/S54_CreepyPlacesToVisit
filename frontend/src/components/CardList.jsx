import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Card from './Card'

const CardList = () => {
  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} marginTop={100}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
</Grid>
    </div>
  )
}

export default CardList