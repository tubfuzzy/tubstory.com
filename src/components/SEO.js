import { Helmet } from 'react-helmet'
import * as React from "react"

const SEO = ({ description, lang, meta, title }) => {
        return(
        // <Helmet title={ title || 'Theem' } defer={ false } />
        <Helmet>
            {/* <link rel="shortcut icon" type="image/png" href="../images/person.svg"/> */}
            <title>{ title || 'Thup.site' }</title>
            <meta name="description" content={ description || 'something'} />
            <meta name="theme-color" content="#ffffff"></meta>
            <meta name="twitter:site" content="@thupmeemui"></meta>
        </Helmet>

    )
}
export default SEO
