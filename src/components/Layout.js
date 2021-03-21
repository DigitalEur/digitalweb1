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
                    href={`${withPrefix('/')}img/star_touch.jpg`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/star_32.jpg`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/star_16.jpg`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix('/')}img/star_svg.svg`}
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
