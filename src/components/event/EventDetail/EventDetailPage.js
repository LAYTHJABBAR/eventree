import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { EventDetailHeader } from './EventDetailHeader'
import { EventDetailInfo } from './EventDetailInfo'
import { EventDetailChat } from './EventDetailChat'
import { EventDetailSideBar } from './EventDetailSideBar'

export const EventDetailPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}> 
      <EventDetailHeader />
      <EventDetailInfo />
      <EventDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
      <EventDetailSideBar />
      </Grid.Column>
    </Grid>
  )
}
