import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import Activitylist from './ActivityList'

import { useStore } from '../../../app/stores/store'
import { observer } from 'mobx-react-lite'
import LoadingComponent from '../../../app/layout/LoadingComponent'


export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
    // *** This is getting data from API 
    // axios.get<Activity[]> ('http://localhost:5000/api/activities').then(response => {
    //   setActivities(response.data);
    // })
}, [activityRegistry.size, loadActivities]);

if(activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
    return (
        <Grid>
            <Grid.Column width='10'>
                <Activitylist />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity Filters</h2>
            </Grid.Column>
        </Grid>
    )
})