import React from 'react'
import PropTypes from 'prop-types'
import Link from "gatsby-link";

const FeatureGrid = ({gridItems}) => (
    <>
        {gridItems.map((item) => (
            <div key={item.title} className="mb-5">
                <div id={item.title.toLowerCase().replace(/ /g, "-")}>
                    {/*<PreviewCompatibleImage imageInfo={item} />*/}
                    <Link
                        className=" text-primary"
                        to={'/servizi/' + item.title.toLowerCase().replace(/ /g, "-")}
                    >
                        {item.title}
                    </Link>
                    <p>{item.description}</p>

                    <Link
                        className=" text-primary"
                        to={'/servizi/' + item.title.toLowerCase().replace(/ /g, "-")}
                    >
                        Richiedi un preventivo
                    </Link>
                </div>
            </div>
        ))}
    </>
)

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
        })
    ),
}

export default FeatureGrid
