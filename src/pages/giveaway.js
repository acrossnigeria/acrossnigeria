import Layout from '@/components/Layout'
import Quiz from '@/components/Quiz';
import React from 'react'

function giveaway() {

  return (
    <Layout>
      <Quiz />
    </Layout>
  )
}


giveaway.auth=true;
  export default giveaway