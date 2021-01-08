import React, { Component } from 'react';
import classes from './Dashboard.module.css';
import { Pie, Line, Bar } from 'react-chartjs-2';
import {
    Ballot, ViewList, MonetizationOn, People, NewReleases, Info, DateRange, NotificationImportant
} from "@material-ui/icons";
import { Fade } from 'react-reveal';


const state = {
    labels: ['Generalist', 'News', 'Sports', 'Gastronomy', 'Humor', 'Adult'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4',
                '#2a87d3'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F',
                '#1769ac'
            ],
            data: [65, 59, 80, 81, 56, 30]
        }
    ]
}
const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
        {
            label: 'amount($)',
            backgroundColor: [
                'rebeccapurple',
                'blueviolet',
                'goldenrod',
                'gray',
                'chartreuse',
                'tomato',
                'rgba(255, 99, 132, 0.6)'
            ],
            // borderColor: 'rgba(255,99,132,1)',
            // borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            // hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 42]
        }
    ]
};

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'amount($)',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const styles = {
    fontSize: '40px'
}
const FooterStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
    color: 'gray'
}
const backgroundColor = [
    { background: '#4dabf7' },
    { background: '#52AC56' },
    { background: '#EA4541' },
    { background: 'rgb(106, 231, 33)' },
    { background: 'blueviolet' },
    { background: 'rgb(243, 230, 51)' },
];

class Dashboard extends Component {
    state = {
        addsStart: 0,
        addsEnd: 100,
        ordersStart: 0,
        ordersEnd: 1000,
        newOrdersStart: 0,
        newOrdersEnd: 30,
        soldStart: 0,
        soldEnd: 100,
        newSoldStart: 0,
        newSoldEnd: 60,
        customersStart: 0,
        customersEnd: 100
    };

    percentage = () => {
        if (this.state.addsStart < this.state.addsEnd) {
            this.setState({
                addsStart: this.state.addsStart + 10
            });
        }
        if (this.state.ordersStart < this.state.ordersEnd) {
            this.setState({
                ordersStart: this.state.ordersStart + 50
            });
        }
        if (this.state.newOrdersStart < this.state.newOrdersEnd) {
            this.setState({
                newOrdersStart: this.state.newOrdersStart + 1
            });
        }
        if (this.state.soldStart < this.state.soldEnd) {
            this.setState({
                soldStart: this.state.soldStart + 1
            });
        }
        if (this.state.newSoldStart < this.state.newSoldEnd) {
            this.setState({
                newSoldStart: this.state.newSoldStart + 1
            });
        }
        if (this.state.customersStart < this.state.customersEnd) {
            this.setState({
                customersStart: this.state.customersStart + 1
            });
        }
    }
    componentDidUpdate() {
        setTimeout(() => {
            this.percentage();
        }, 50);
    }
    render() {
        return (
            <div className={classes.Dashboard}>
                <div className={classes.Divider}>
                    <div className={classes.DividerPart1}>
                        <h3>My Normal Statistics</h3>
                    </div>
                    <div className={classes.DividerPart2}>
                        <div className={classes.Notification}> <NotificationImportant />
                            <div className={classes.NotificationStyle}>
                                <small>0</small>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={classes.DashboardBox}>

                    <div className={classes.DashboardBoxItem}>
                        <div className={classes.DashboardBoxColumnItem1}>
                            <div className={classes.DashboardBoxFlex}>
                                <div className={classes.DashboardBoxFlexItem1}>
                                    <div className={classes.DashboardBoxItemHeader} style={backgroundColor[0]}>
                                        <div className={classes.Icon}><Ballot style={styles} /></div>
                                    </div>
                                </div>
                                <div className={classes.DashboardBoxFlexItem2}>
                                    <div><p>Advertisements</p></div>
                                    <Fade onReveal={() => this.percentage()}>
                                        <div><h3>{this.state.addsStart}</h3></div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className={classes.DashboardBoxColumnItem2}></div>
                        <div className={classes.DashboardBoxColumnItem3}>
                            <div style={FooterStyle}>
                                <Info />
                                <small>Not More</small>
                            </div>
                        </div>
                    </div>
                    <div className={classes.DashboardBoxItem}>
                        <div className={classes.DashboardBoxColumnItem1}>
                            <div className={classes.DashboardBoxFlex}>
                                <div className={classes.DashboardBoxFlexItem1}>
                                    <div className={classes.DashboardBoxItemHeader} style={backgroundColor[1]}>
                                        <div className={classes.Icon}><ViewList style={styles} /></div>
                                    </div>
                                </div>
                                <div className={classes.DashboardBoxFlexItem2}>
                                    <div><p>Orders</p></div>
                                    <Fade onReveal={() => this.percentage()}>
                                        <div><h3>{this.state.ordersStart}</h3></div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className={classes.DashboardBoxColumnItem2}></div>
                        <div className={classes.DashboardBoxColumnItem3}>
                            <div style={FooterStyle}>
                                <Info />
                                <small>Not More</small>
                            </div>
                        </div>
                    </div>
                    <div className={classes.DashboardBoxItem}>
                        <div className={classes.DashboardBoxColumnItem1}>
                            <div className={classes.DashboardBoxFlex}>
                                <div className={classes.DashboardBoxFlexItem1}>
                                    <div className={classes.DashboardBoxItemHeader} style={backgroundColor[2]}>
                                        <div className={classes.Icon}><NewReleases style={styles} /></div>
                                    </div>
                                </div>
                                <div className={classes.DashboardBoxFlexItem2}>
                                    <div><p>New Orders</p></div>
                                    <Fade onReveal={() => this.percentage()}>
                                        <div><h3>{this.state.newOrdersStart}</h3></div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className={classes.DashboardBoxColumnItem2}></div>
                        <div className={classes.DashboardBoxColumnItem3}>
                            <div style={FooterStyle}>
                                <DateRange />
                                <small>Last 24 hours</small>
                            </div>
                        </div>
                    </div>
                    <div className={classes.DashboardBoxItem}>
                        <div className={classes.DashboardBoxColumnItem1}>
                            <div className={classes.DashboardBoxFlex}>
                                <div className={classes.DashboardBoxFlexItem1}>
                                    <div className={classes.DashboardBoxItemHeader} style={backgroundColor[3]}>
                                        <div className={classes.Icon}><MonetizationOn style={styles} /></div>
                                    </div>
                                </div>
                                <div className={classes.DashboardBoxFlexItem2}>
                                    <div><p>Sold Price</p></div>
                                    <Fade onReveal={() => this.percentage()}>
                                        <div><h3>${this.state.soldStart}</h3></div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className={classes.DashboardBoxColumnItem2}></div>
                        <div className={classes.DashboardBoxColumnItem3}>
                            <div style={FooterStyle}>
                                <Info />
                                <small>Not More</small>
                            </div>
                        </div>
                    </div>
                    <div className={classes.DashboardBoxItem}>
                        <div className={classes.DashboardBoxColumnItem1}>
                            <div className={classes.DashboardBoxFlex}>
                                <div className={classes.DashboardBoxFlexItem1}>
                                    <div className={classes.DashboardBoxItemHeader} style={backgroundColor[4]}>
                                        <div className={classes.Icon}><MonetizationOn style={styles} /></div>
                                    </div>
                                </div>
                                <div className={classes.DashboardBoxFlexItem2}>
                                    <div><p>New Sold</p></div>
                                    <Fade onReveal={() => this.percentage()}>
                                        <div><h3>${this.state.newOrdersStart}</h3></div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className={classes.DashboardBoxColumnItem2}></div>
                        <div className={classes.DashboardBoxColumnItem3}>
                            <div style={FooterStyle}>
                                <DateRange />
                                <small>Last 24 hours</small>
                            </div>
                        </div>
                    </div>
                    <div className={classes.DashboardBoxItem}>
                        <div className={classes.DashboardBoxColumnItem1}>
                            <div className={classes.DashboardBoxFlex}>
                                <div className={classes.DashboardBoxFlexItem1}>
                                    <div className={classes.DashboardBoxItemHeader} style={backgroundColor[5]}>
                                        <div className={classes.Icon}><People style={styles} /></div>
                                    </div>
                                </div>
                                <div className={classes.DashboardBoxFlexItem2}>
                                    <div><p>Customers</p></div>
                                    <Fade onReveal={() => this.percentage()}>
                                        <div><h3>{this.state.customersStart}</h3></div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className={classes.DashboardBoxColumnItem2}></div>
                        <div className={classes.DashboardBoxColumnItem3}>
                            <div style={FooterStyle}>
                                <Info />
                                <small>Not More</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Divider}>
                    <h3>My Graph Statistics</h3>
                </div>
                <div className={classes.Chart}>
                    <div className={classes.ChartItem}>
                        <Pie
                            data={state}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Most choose Services',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'left'
                                }
                            }}
                        />
                    </div>
                    <div className={classes.ChartItem}>
                        <Bar
                            data={data}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Last Week Sold',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'top'
                                },
                                maintainAspectRatio: true
                            }}
                        />
                    </div>
                    <div className={classes.ChartItem}>
                        <Line
                            data={lineData}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Last Seven Months Sold',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'top'
                                }
                            }} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Dashboard;
