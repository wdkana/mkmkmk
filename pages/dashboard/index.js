import React, { useEffect } from 'react'
import DashboardComponent from '../../Components/Content/Dashboard';
import Layout from '../../Components/Layout/Layout';
import Cookies from 'universal-cookie';

function PageDashboard() {

  useEffect(() => {
    const cookies = new Cookies()
    if(cookies.get('private_key') == undefined || cookies.get('public_key') == undefined ){
      window.location.href = '/login'
    }
  }, []);

  return (
    <Layout>
      <DashboardComponent/>
    </Layout>
  );
}

export default PageDashboard
