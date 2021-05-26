import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import Activitylist from './ActivityList'

import { useStore } from '../../../app/stores/store'
import { observer } from 'mobx-react-lite'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import ActivityFilters from './ActivityFilters'


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

if(activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />
    return (
        <Grid>
            <Grid.Column width='10'>
                <Activitylist />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
})