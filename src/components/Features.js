import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import {Card, CardBody} from "reactstrap";

const FeatureGrid = ({gridItems}) => (
    <>
        {gridItems.map((item) => (
            <div key={item.text} className="mb-3">
                <Card className=" shadow shadow-lg--hover">
                    <CardBody>
                        <div className=" d-flex px-3">
                            <div className=" pl-4">
                                {/*<PreviewCompatibleImage imageInfo={item} />*/}
                                <h5>
                                    {item.text}
                                </h5>
                                <p>{item.text}</p>
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
