import React from 'react'
import PropTypes from 'prop-types'
import Link from "gatsby-link";
import {Button, Col} from "reactstrap";

const FeatureGrid = ({gridItems}) => (
    <>
        {gridItems.map((item) => (
            <div key={item.title} className="my-4">
                <div id={item.title.toLowerCase().replace(/ /g, "-")} className="text-justify">
                    {/*<PreviewCompatibleImage imageInfo={item} />*/}
                    <Link
                        className=" text-primary"
                        to={'/servizi/' + item.title.toLowerCase().replace(/ /g, "-")}
                    >
                        {item.title}
                    </Link>
                    <p>{item.description}</p>
                </div>
            </div>
        ))}
        <Button
            block
            className="btn-success"
            color="default"
            href="/contatti/"
            size="lg"
        >
            Richiedi un preventivo
        </Button>
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
