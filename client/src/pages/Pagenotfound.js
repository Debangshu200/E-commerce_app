import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Pagenotfound = () => {
  return (
    <Layout title={'go back - page not found'}>
        <div className='pnf'>
        <h1 className = "pnf-title">404</h1>
        <h2 className='pnf-heading'>Oops! page not Found</h2>
        <Link to = '/' className = 'pnf-btr'>
        Go Back
        </Link>
        </div>
    </Layout>
  )
}

export default Pagenotfound;