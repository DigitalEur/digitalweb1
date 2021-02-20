import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import {Card, CardBody} from "reactstrap";

const FeatureGrid = ({gridItems}) => (
    <>
        {gridItems.map((item) => (
            <div key={item.title} className="mb-5">
                <Card className=" shadow shadow-lg--hover">
                    <CardBody>
                        <div className=" d-flex p-3">
                            <div id={item.title.toLowerCase().replace(/ /g,"-")}>
                                {/*<PreviewCompatibleImage imageInfo={item} />*/}
                                <h5>
                                    {item.title}
                                </h5>
                                <p>{item.description}</p>
                                <a
                                    className=" text-primary"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </CardBody>
                </Card>
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
