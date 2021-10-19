import { Helmet } from 'react-helmet'
import * as React from "react"

const SEO = ({ description, lang, meta, title }) => {
        return(
        // <Helmet title={ title || 'Theem' } defer={ false } />
        <Helmet>
            <title>{ title || 'Theeraprasert.m' }</title>
            <meta name="description" content={ description || 'Theeraprasert Meemui'} />
        </Helmet>

    )
}
export default SEO
