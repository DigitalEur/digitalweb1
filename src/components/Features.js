import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import {Card, CardBody} from "reactstrap";

const FeatureGrid = ({gridItems}) => (
    <div className="columns is-multiline">
        {gridItems.map((item) => (
            <div key={item.text} className="column is-6">
                <section className="section">
                    <Card className="shadow shadow-lg--hover mt-5">
                        <CardBody>
                            <div className="d-flex px-3">
                                <div>
                                    <div
                                        className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                        <i className="ni ni-satisfied" />
                                    </div>
                                </div>
                                <div className="pl-4">
                                    {/*<PreviewCompatibleImage imageInfo={item} />*/}
                                    <h5 className="title text-success">
                                        {item.text}
                                    </h5>
                                    <p>{item.text}</p>
                                    <a
                                        className="text-success"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </section>
            </div>
        ))}
    </div>
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
