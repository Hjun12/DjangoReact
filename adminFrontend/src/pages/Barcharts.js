/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContentHeader, BarChart1} from '@components';

const Blank = () => {
    return (
        <div>
            <ContentHeader title="Table Page" />
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"> 외부 API 보여주기</h3>
                            <div className="card-tools">
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-widget="collapse"
                                    data-toggle="tooltip"
                                    title="Collapse"
                                >
                                    <i className="fa fa-minus" />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-widget="remove"
                                    data-toggle="tooltip"
                                    title="Remove"
                                >
                                    <i className="fa fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <BarChart1 />
                        </div>
                        <div className="card-footer">Footer</div>x
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blank;
