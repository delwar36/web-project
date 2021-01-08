import React from 'react';
import {useTranslation} from 'react-i18next'
import classes from '../CreateAdd.module.css';
import Button from '../../../../components/UI/Button/Button';
const backgroundColors = ['#4dabf7', 'rgb(170, 235, 73)', 'tomato'];

export const SinglePackageItem = ({ packageType, selectedPackage, values, handlePackagesData, handleAddTasksFields, handleRemoveTasksFields, handleTasksInputChange }) => {
    const style = {
        background: backgroundColors[selectedPackage - 1]
    }

    const {t} = useTranslation(['translation','MyAds'])

    return <div className={classes.PackageDescriptionItem}>
        <div className={classes.PackageTypeHeader} style={style}>{packageType}</div>
        <div className={classes.Divider}></div>
        <div className={classes.PackageDescriptionItemName}>
            <textarea
                type='text'
                minLength='20'
                maxLength='50'
                value={values.packagesData[selectedPackage - 1].name}
                placeholder={t('MyAds:CreateAdd.Step2.SinglePackageItem.0')}
                onChange={(event) => handlePackagesData(event, selectedPackage, 'name')}
            ></textarea>
            <strong>{values.packagesData[selectedPackage - 1].name.length}/50 (mx-50,mn-20)</strong>
        </div>
        <div className={classes.Divider}></div>
        <textarea
            maxLength='300'
            minLength='50'
            value={values.packagesData[selectedPackage - 1].description}
            type='text'
            placeholder={t('MyAds:CreateAdd.Step2.SinglePackageItem.1')}
            onChange={(event) => handlePackagesData(event, selectedPackage, 'description')}
        ></textarea>
        <strong>{values.packagesData[selectedPackage - 1].description.length}/300 (mx-300,mn-50)</strong>
        <div className={classes.Divider}></div>
        <small>{t('MyAds:CreateAdd.Step2.SinglePackageItem.2')}</small>
        <div className={classes.DividerWithoutStyle}></div>
        <div className={classes.AddOrRemoveButton}>
            <Button
                disabled={values.selectedPackage === selectedPackage ? false : true} buttonType='Apple'
                clicked={(e) => handleAddTasksFields(selectedPackage)}>
                <i className="fas fa-plus"></i>
            </Button>
            <Button
                buttonType='Google'
                disabled={values.advertiseTasks[selectedPackage - 1].tasks.length === 0 ? true : false} clicked={(e) => handleRemoveTasksFields(selectedPackage)}>
                <i className="fas fa-times"></i>
            </Button>
            <Button
                disabled={values.advertiseTasks[selectedPackage - 1].tasks.length === 0 ? true : false} buttonType='Submit'
                clicked={(event) => handlePackagesData(event, selectedPackage, 'tasks')}>
                <i className="fas fa-check"></i>
            </Button>
        </div>
        {
            values.selectedPackage === selectedPackage ? <div className={classes.PackageTask}>
                {values.advertiseTasks[selectedPackage - 1].tasks.map((fieldValue, index) =>
                    <React.Fragment key={index}>
                        <input
                            minLength='20'
                            maxLength='50'
                            type='text'
                            name='confirmed_tasks'
                            value={fieldValue.confirmed_tasks}
                            onChange={event => handleTasksInputChange(index, event, selectedPackage)}
                        />
                    </React.Fragment>
                )}
            </div> : null
        }
        {
            values.packagesData[selectedPackage - 1].tasks.length !== 0 ?
                <React.Fragment>
                    <div className={classes.TaskDivider}></div>
                    <small>{t('MyAds:CreateAdd.Step2.SinglePackageItem.3')}</small>
                    <div className={classes.TaskDivider}></div>
                    <div className={classes.Tasks}>
                        {values.packagesData[selectedPackage - 1].tasks.map((task, index) =>
                            <small key={index}>{index + 1}. {task}</small>
                        )}
                    </div>
                </React.Fragment>
                :
                null
        }
        <div className={classes.Divider}></div>
        <small>{t('MyAds:CreateAdd.Step2.SinglePackageItem.4')}</small>
        <div className={classes.DividerWithoutStyle}></div>
        <div className={classes.DeliveryTime}>
            <input
                minLength='1'
                maxLength='10'
                type='text'
                name='delivery_time'
                placeholder={t('MyAds:CreateAdd.Step2.SinglePackageItem.5')}
                value={values.packagesData[selectedPackage - 1].delivery_time}
                onChange={(event) => handlePackagesData(event, selectedPackage, 'delivery_time')}
            />
            <div className={classes.DividerH}></div>
            <select
                className={classes.DownArrow}
                onChange={(event) => handlePackagesData(event, selectedPackage, 'delivery_type')}>
                <option disabled selected>{t('MyAds:CreateAdd.Step2.SinglePackageItem.6')}</option>
                {values.delivery_types.map((delivery_type, index) => (
                    <option
                        key={index}
                        selected={values.packagesData[selectedPackage - 1].delivery_type === delivery_type.toString() ? true : false} value={delivery_type}>
                        {delivery_type}</option>
                ))}
            </select>
        </div>
        <div className={classes.Divider}></div>
        <input
            maxLength='10'
            type='text'
            name='price'
            placeholder={t('MyAds:CreateAdd.Step2.SinglePackageItem.7')}
            value={values.packagesData[selectedPackage - 1].price}
            onChange={(event) => handlePackagesData(event, selectedPackage, 'price')}
        />
    </div>
}