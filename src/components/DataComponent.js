// src/components/DataComponent.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DATA } from '../queries';
import CardComponent from './CardComponent';

const DataComponent = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <div style={styles.container}>
      {data.u_launches.map(launch => (
        <CardComponent
          key={launch.missionName}
          missionName={launch.missionName}
          launchpayload={launch.launchpayload}
          payloadmass={launch.payloadmass}
          launchdatetime={launch.launchdatetime}
          launchorbit={launch.launchorbit}
          launchpad={launch.launchpad}
          launchvehicle={launch.launchvehicle}
          liftoff={launch.liftoff}
          coverimage={launch.coverimage}
          createdBy={launch.createdBy}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default DataComponent;
