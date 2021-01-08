import React, { Component } from 'react';
import classes from './MyOrders.module.css';
import Button from '../../../components/UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux';
import { Fade } from 'react-reveal';
import OrdersInfo from './OrdersInfo';

class MyOrders extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    state = {
        seeOrdersInfo: false
    }

    onChangeOrdersInfo = () => {
        this.setState({
            seeOrdersInfo: true
        });
    }
    render() {
        const AllOrders = <Aux>
            <div className={classes.MyOrdersItems}>
                <h5>My All Orders</h5>
                <br />
            </div>
            <br />
            <Fade bottom>
                <div className={classes.MyOrdersTable}>
                    <div className={classes.MyOrdersTableDesktopOnly}>
                        <div className={classes.MyOrdersTableItems}>
                            <div className={classes.TableHeader}>
                                <div className={classes.TableSingleItem1}>No</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleItem2}>C Name</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleItem3}>C Image</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleItem6}>Package Type</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleItem4}>Type</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleItem4}>Sub Type</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleItem5}>Actions</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleItem4}>Created At</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleItem4}>Updated At</div>
                            </div>

                            <div className={classes.TableSingleItem} onClick={this.onChangeOrdersInfo}>
                                <div className={classes.TableSingleRowItem1}>1</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItem2}>Company Name</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItem3}>Image</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItem6}>BASIC</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItem4}>TV</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItem4}>Generalist</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItem5}>
                                    <Button
                                        buttonType='Apple'
                                        clicked={this.onChangeOrdersInfo}>
                                        <i class="fas fa-eye"></i>
                                    </Button>
                                    <Button
                                        buttonType='Google'
                                        clicked=''>
                                        <i class="fas fa-trash-alt"></i>
                                    </Button>
                                </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItem4}>2 Jan, 2020</div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItem4}>20 Jan, 2020</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.TableSingleRowItemForMobileOnly}>
                        <div className={classes.TableSingleRowItemColumnForMobile}>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    No
                                            </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>1</div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    C Name
                                             </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>
                                    Company Name
                                             </div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    C Image
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>
                                    Company Image</div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Package Type
                                            </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>BASIC</div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Type
                                            </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>INTERNET</div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Sub Type
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>Social Media</div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Actions
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>
                                    <Button
                                        buttonType='Apple'
                                        clicked={() => this.openModal()}>
                                        <i class="fas fa-eye"></i>
                                    </Button>
                                    <Button
                                        buttonType='Google'
                                        clicked=''>
                                        <i class="fas fa-trash-alt"></i>
                                    </Button></div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Created At
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>2 Jan,2020 </div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Updated At
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>20 Jan, 2020</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Aux>;
        return (
            <Aux>
                <div className={classes.MyOrders}>
                    <div className={classes.MyOrdersMain}>
                        {
                            this.state.seeOrdersInfo ?
                                <OrdersInfo /> : AllOrders
                        }

                    </div>
                </div>
            </Aux>
        );
    }
};

export default MyOrders;
