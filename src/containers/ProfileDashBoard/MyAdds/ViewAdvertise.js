import React from 'react';
import classes from './MyAdds.module.css';
const backgrounds = ['#4dabf7', 'rgb(170, 235, 73)', 'tomato']

const ViewAdvertise = (props) => {
    const { t } = props;
    return <div className={classes.ViewAdvertise}>
        <div className={classes.ViewAdvertiseHeader}>
            <div className={classes.ViewAdvertiseHeaderItem1}>
                <h5>{t('MyAds:ViewAdvertise.title')}</h5>
            </div>
            <div className={classes.ViewAdvertiseHeaderItem2}>
                <i className="fas fa-times" onClick={props.closed}></i>
            </div>
        </div>
        <div className={classes.DividerV}></div>
        <div className={classes.ViewAdvertiseMain}>
            <div className={classes.ViewAdvertiseMainRow}>
                <div className={classes.TableSingleRowItemForMobile}>
                    <div className={classes.TableSingleRowItemForMobileLabel}>
                        {t('MyAds:MyAdds.columnNames.0')}
                    </div>
                    <div className={classes.DividerH}></div>
                    <div className={classes.TableSingleRowItemForMobileValue}>{props.advertiseIndex + 1}</div>
                </div>
                <div className={classes.DividerV}></div>
                <div className={classes.TableSingleRowItemForMobile}>
                    <div className={classes.TableSingleRowItemForMobileLabel}>
                        {t('MyAds:MyAdds.columnNames.1')}
                    </div>
                    <div className={classes.DividerH}></div>
                    <div className={classes.TableSingleRowItemForMobileValue}>
                        {props.advertise.title}
                    </div>
                </div>
                <div className={classes.DividerV}></div>
                <div className={classes.TableSingleRowItemForMobile}>
                    <div className={classes.TableSingleRowItemForMobileLabel}>
                        {t('MyAds:MyAdds.columnNames.2')}
                    </div>
                    <div className={classes.DividerH}></div>
                    <div className={classes.TableSingleRowItemForMobileValue}>
                        {props.advertise.description}</div>
                </div>
                <div className={classes.DividerV}></div>
                <div className={classes.TableSingleRowItemForMobile}>
                    <div className={classes.TableSingleRowItemForMobileLabel}>
                        {t('MyAds:MyAdds.columnNames.3')}
                    </div>
                    <div className={classes.DividerH}></div>
                    <div className={classes.TableSingleRowItemForMobileValue}>{props.advertise.type}</div>
                </div>
                <div className={classes.DividerV}></div>
                <div className={classes.TableSingleRowItemForMobile}>
                    <div className={classes.TableSingleRowItemForMobileLabel}>
                        {t('MyAds:MyAdds.columnNames.4')}
                    </div>
                    <div className={classes.DividerH}></div>
                    <div className={classes.TableSingleRowItemForMobileValue}>{props.advertise.subtype}</div>
                </div>
                <div className={classes.DividerV}></div>
                <div className={classes.TableSingleRowItemForMobile}>
                    <div className={classes.TableSingleRowItemForMobileLabel}>
                        {t('MyAds:MyAdds.columnNames.5')}
                    </div>
                    <div className={classes.DividerH}></div>
                    <div className={classes.TableSingleRowItemForMobileValue}>{props.advertise.packages.length}</div>
                </div>
            </div>
            {props.advertise.packages.map((packageData, index) => (
                <div className={classes.ViewAdvertiseMainRow}>
                    <h6 style={{ backgroundColor: backgrounds[index].toString() }}>{packageData.type}</h6>
                    <div className={classes.DividerV}></div>
                    <div className={classes.TableSingleRowItemForMobile}>
                        <div className={classes.TableSingleRowItemForMobileLabel}>
                            {t('MyAds:ViewAdvertise.commonColumn.0')}
                        </div>
                        <div className={classes.DividerH}></div>
                        <div className={classes.TableSingleRowItemForMobileValue}>{packageData.name}</div>
                    </div>
                    <div className={classes.DividerV}></div>
                    <div className={classes.TableSingleRowItemForMobile}>
                        <div className={classes.TableSingleRowItemForMobileLabel}>
                            {t('MyAds:ViewAdvertise.commonColumn.1')}
                        </div>
                        <div className={classes.DividerH}></div>
                        <div className={classes.TableSingleRowItemForMobileValue}>
                            {packageData.description}
                        </div>
                    </div>
                    <div className={classes.DividerV}></div>
                    <div className={classes.TableSingleRowItemForMobile}>
                        <div className={classes.TableSingleRowItemForMobileLabel}>
                            {t('MyAds:ViewAdvertise.commonColumn.2')}
                        </div>
                        <div className={classes.DividerH}></div>
                        <div className={classes.TableSingleRowItemForMobileValue}>
                            {packageData.tasks.map((task, index) => (
                                <small>{index + 1}. {task}</small>
                            ))}
                        </div>
                    </div>
                    <div className={classes.DividerV}></div>
                    <div className={classes.TableSingleRowItemForMobile}>
                        <div className={classes.TableSingleRowItemForMobileLabel}>
                            {t('MyAds:ViewAdvertise.commonColumn.3')}
                        </div>
                        <div className={classes.DividerH}></div>
                        <div className={classes.TableSingleRowItemForMobileValue}>images</div>
                    </div>
                    <div className={classes.DividerV}></div>
                    <div className={classes.TableSingleRowItemForMobile}>
                        <div className={classes.TableSingleRowItemForMobileLabel}>
                            {t('MyAds:ViewAdvertise.commonColumn.4')}
                        </div>
                        <div className={classes.DividerH}></div>
                        <div className={classes.TableSingleRowItemForMobileValue}>
                            {packageData.delivery_time + ' ' + packageData.delivery_type}
                        </div>
                    </div>
                    <div className={classes.DividerV}></div>
                    <div className={classes.TableSingleRowItemForMobile}>
                        <div className={classes.TableSingleRowItemForMobileLabel}>
                            {t('MyAds:ViewAdvertise.commonColumn.5')}
                        </div>
                        <div className={classes.DividerH}></div>
                        <div className={classes.TableSingleRowItemForMobileValue}>
                            {packageData.price}$
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
};

export default ViewAdvertise;