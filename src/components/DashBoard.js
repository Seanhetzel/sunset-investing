import React from "react";

class DashBoard extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    {/* Page Header*/}
                    <div className="page-header no-margin-bottom">
                        <div className="container-fluid">
                            <h2 className="h5 no-margin-bottom">Charts</h2>
                        </div>
                    </div>
                    {/* Breadcrumb*/}
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Charts </li>
                        </ul>
                    </div>
                    <section>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="line-chart block chart">
                                        <div className="title">
                                            <strong>Line Chart Example</strong>
                                        </div>
                                        <canvas id="lineChartCustom1" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="lin-chart block chart">
                                        <div className="title">
                                            <strong>Line Chart Example</strong>
                                        </div>
                                        <div className="line-chart chart margin-bottom-sm">
                                            <canvas id="lineChartCustom2" />
                                        </div>
                                        <div className="line-chart chart">
                                            <canvas id="lineChartCustom3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="chart block">
                                        <div className="title">
                                            {" "}
                                            <strong>Bar Chart Example</strong>
                                        </div>
                                        <div className="bar-chart chart margin-bottom-sm">
                                            <canvas id="barChartCustom1" />
                                        </div>
                                        <div className="bar-chart chart">
                                            <canvas id="barChartCustom2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="bar-chart block chart">
                                        <div className="title">
                                            <strong>Bar Chart Example</strong>
                                        </div>
                                        <div className="bar-chart chart">
                                            <canvas id="barChartCustom3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="pie-chart chart block">
                                        <div className="title">
                                            <strong>Pie Chart Example</strong>
                                        </div>
                                        <div className="pie-chart chart margin-bottom-sm">
                                            <canvas id="pieChartCustom1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="doughnut-chart chart block">
                                        <div className="title">
                                            <strong>Pie Chart Example</strong>
                                        </div>
                                        <div className="doughnut-chart chart margin-bottom-sm">
                                            <canvas id="doughnutChartCustom1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="polar-chart chart block">
                                        <div className="title">
                                            <strong>Polar Chart Example</strong>
                                        </div>
                                        <div className="polar-chart chart margin-bottom-sm">
                                            <canvas id="polarChartCustom" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="radar-chart chart block">
                                        <div className="title">
                                            <strong>Radar Chart Example</strong>
                                        </div>
                                        <div className="radar-chart chart margin-bottom-sm">
                                            <canvas id="radarChartCustom" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="footer">
                        <div className="footer__block block no-margin-bottom">
                            <div className="container-fluid text-center">
                                <p className="no-margin-bottom">
                                    2019 © Your company.{" "}
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

export default DashBoard;