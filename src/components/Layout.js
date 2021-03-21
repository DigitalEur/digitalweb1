import React from 'react'
import {Helmet} from 'react-helmet'
import SimpleFooter from '../components/Footers/SimpleFooter'
import DemoNavbar from '../components/Navbars/DemoNavbar'
import "../assets/scss/argon-design-system-react.scss?v1.1.0";
//import './all.sass'
import useSiteMetadata from './SiteMetadata'
import {withPrefix} from 'gatsby'

const TemplateWrapper = ({children}) => {
    const {title, description} = useSiteMetadata()
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix('/')}img/apple-touch_icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon_europa_32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon_europa_16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix('/')}img/safari_pinned_tab.svg`}
                    color="#ff4400"
                />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta
                    property="og:image"
                    content={`${withPrefix('/')}img/og-image.jpg`}
                />
            </Helmet>
            <DemoNavbar />
            <div>{children}</div>
            <SimpleFooter />
        </div>
    )
}

export default TemplateWrapper
