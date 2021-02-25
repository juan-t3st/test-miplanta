import React from "react"
//import { Link } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    {/* <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link> */}
    <div className="grid grid-cols-3 gap-4 ml-52 mb-28 mt-12">
    
    <div className="w-28 ">
      <Image resource={"logo_sites_duro.png"} />
    </div>
    
    <div className="w-28 -ml-16">
    <Image resource={"logo_sites_duro.png"} />
    </div>
    
    <div className="w-28 -ml-32">
    <Image resource={"logo_sites_duro.png"} />
    </div>
    
    <div className="w-28 mt-8">
    <Image resource={"logo_sites_duro.png"} />
    </div>

    <div className="up"></div>
    </div>
  </Layout>
)

export default SecondPage
