import React from 'react';
import { withTranslation } from 'react-i18next'
import classes from './MyAdds.module.css';
import Button from '../../../components/UI/Button/Button';
import { Add } from '@material-ui/icons';
import { Modal } from '../../../components/UI/Modal';
import ViewAdvertise from './ViewAdvertise';
import { Fade } from 'react-reveal';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import { Spinner } from '../../../components/UI/Spinner/Spinner';
import { DataLoadError } from '../../../components/UI/DataLoadError';
import { getDate } from '../../../shared/utility';

class MyAdds extends React.Component {
    state = { showModal: false, showSpinner: true, advertiseIndex: null }
    openModal = (index) => {
        this.setState({ showModal: true, advertiseIndex: index });
    }
    closeModal = () => this.setState({ showModal: false });
    componentDidMount() {
        if (!this.props.advertisesData) this.props.fetchUserAdvertises();
        setTimeout(() => {
            this.setState({ showSpinner: false });
        }, 20000);
    }
    render() {
        const { t } = this.props;
        let advertisesItemsList = <React.Fragment>
            {this.state.showSpinner ?
                <Spinner />
                :
                <DataLoadError text='There are no advertises created yet or an error created.Try again later :)' />}
        </React.Fragment>
        if (this.props.advertisesData) {
            advertisesItemsList = <React.Fragment>
                {this.props.advertisesData.map((advertise, index) =>
                    <Fade bottom delay={500 * (index + 1)}>
                        <div className={classes.TableSingleItem}>
                            <div className={classes.TableSingleRowItem1}>{index + 1}</div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.TableSingleRowItem2}>{advertise.title}</div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.TableSingleRowItem3}>{advertise.description.trim().substr(0, 60)}...</div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.TableSingleRowItem4}>{advertise.type}</div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.TableSingleRowItem4}>{advertise.subtype}</div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.TableSingleRowItem6}>{advertise.packages.length}</div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.TableSingleRowItem5}>
                                <Button
                                    buttonType='Apple'
                                    clicked={() => this.openModal(index)}>
                                    <i class="fas fa-eye"></i>
                                </Button>
                                <Button
                                    buttonType='Facebook'
                                    clicked=''>
                                    <i class="fas fa-pencil-alt"></i>
                                </Button>
                                <Button
                                    buttonType='Google'
                                    clicked=''>
                                    <i class="fas fa-trash-alt"></i>
                                </Button>
                            </div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.TableSingleRowItem4}>{getDate(advertise.createdAt)}</div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.TableSingleRowItem4}>{getDate(advertise.updatedAt)}</div>
                        </div>
                    </Fade>
                )}
            </React.Fragment>
        }
        let mobileAdvertisesItemsList = <React.Fragment>
            {this.state.showSpinner ?
                <Spinner />
                :
                <DataLoadError text='There are no advertises created yet or an error created.Try again later :)' />}
        </React.Fragment>
        if (this.props.advertisesData) {
            mobileAdvertisesItemsList = <React.Fragment>
                {
                    this.props.advertisesData.map((advertise, index) =>
                        <Fade bottom delay={500 * (index + 1)}><div className={classes.TableSingleRowItemColumnForMobile}>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    No
                                </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>{index + 1}</div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Title
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>
                                    {advertise.title}
                                </div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Description
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>
                                    {advertise.description.trim().substr(0, 100)}...</div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Type
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>{advertise.type}</div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Sub Type
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>{advertise.subtype}</div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Packages
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>{advertise.packages.length}</div>
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
                                        clicked={() => this.openModal(index)}>
                                        <i class="fas fa-eye"></i>
                                    </Button>
                                    <Button
                                        buttonType='Facebook'
                                        clicked=''>
                                        <i class="fas fa-pencil-alt"></i>
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
                                <div className={classes.TableSingleRowItemForMobileValue}>{getDate(advertise.createdAt)}</div>
                            </div>
                            <div className={classes.DividerV}></div>
                            <div className={classes.TableSingleRowItemForMobile}>
                                <div className={classes.TableSingleRowItemForMobileLabel}>
                                    Updated At
                                    </div>
                                <div className={classes.DividerH}></div>
                                <div className={classes.TableSingleRowItemForMobileValue}>{getDate(advertise.createdAt)}</div>
                            </div>
                        </div>
                        </Fade>
                    )}
            </React.Fragment>
        }
        return (
            <React.Fragment>
                <div className={classes.MyAdds}>
                    <div className={classes.MyAddsMain}>
                        <div className={classes.MyAddsItems}>
                            <h5>{t('MyAds:MyAdds.title')}</h5>
                            <br />
                            <Button buttonType='Apple' clicked={() => this.props.history.push('/create_add')}>
                                <div className={classes.CreateAddButton}>
                                    <Add /> <span>Create New Add</span>
                                </div>
                            </Button>
                        </div>
                        <br />
                        <div className={classes.MyAddsTable}>
                            <div className={classes.MyAddsTableTitle}>
                                <div className={classes.TitleValue}>My all advertises</div>
                            </div>
                            <div className={classes.MyAddsTableDesktopOnly}>
                                <div className={classes.MyAddsTableItems}>
                                    <div className={classes.TableHeader}>
                                        <div className={classes.TableSingleItem1}>No</div>
                                        <div className={classes.DividerH}></div>
                                        <div className={classes.TableSingleItem2}>Title</div>
                                        <div className={classes.DividerH}></div>
                                        <div className={classes.TableSingleItem3}>Description</div>
                                        <div className={classes.DividerH}></div>
                                        <div className={classes.TableSingleItem4}>Type</div>
                                        <div className={classes.DividerH}></div>
                                        <div className={classes.TableSingleItem4}>Sub Type</div>
                                        <div className={classes.DividerH}></div>
                                        <div className={classes.TableSingleItem6}>Packages</div>
                                        <div className={classes.DividerH}></div>
                                        <div className={classes.TableSingleItem5}>Actions</div>
                                        <div className={classes.DividerH}></div>
                                        <div className={classes.TableSingleItem4}>Created At</div>
                                        <div className={classes.DividerH}></div>
                                        <div className={classes.TableSingleItem4}>Updated At</div>
                                    </div>
                                    {advertisesItemsList}
                                </div>
                            </div>
                            <div className={classes.TableSingleRowItemForMobileOnly}>
                                {mobileAdvertisesItemsList}
                            </div>
                        </div>
                    </div>
                </div>
                <Modal type='normal' show={this.state.showModal}
                    modalClosed={this.closeModal}>
                    <ViewAdvertise
                        t={t}
                        advertise={this.props.advertisesData ? this.props.advertisesData[this.state.advertiseIndex] : []}
                        advertiseIndex={this.props.advertisesData ? this.state.advertiseIndex : null}
                        closed={this.closeModal} />
                </Modal>
            </React.Fragment >
        );
    }
};
const mapStateToProps = (state) => {
    return {
        loading: state.dashboardAdvertise.loading,
        error: state.dashboardAdvertise.error,
        message: state.dashboardAdvertise.message,
        advertisesData: state.dashboardAdvertise.userCreatedAdvertises,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserAdvertises: () => dispatch(actions.fetchUserAdvertises()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation(['translation', 'MyAds'])(MyAdds));
