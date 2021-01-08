import React from 'react';
import classes from './MyAdds.module.css';
import Button from '../../../components/UI/Button/Button';
import {Divider} from '../../../components/UI/Spacing';


export const RowItemForDesktop = () =>
    <div className={classes.TableSingleItem}>
        <div className={classes.TableSingleRowItem1}>1</div>
        <Divider orientation='h' space='1'/>
        <div className={classes.TableSingleRowItem2}> I will advertise your products</div>
        <Divider orientation='h' space='1' />
        <div className={classes.TableSingleRowItem3}>The modern world we live in is constantly evolving. One great example is...</div>
        <Divider orientation='h' space='1' />
        <div className={classes.TableSingleRowItem4}>TV</div>
        <Divider orientation='h' space='1' />
        <div className={classes.TableSingleRowItem4}>Generalist</div>
        <Divider orientation='h' space='1' />
        <div className={classes.TableSingleRowItem6}>2</div>
        <Divider orientation='h' space='1' />
        <div className={classes.TableSingleRowItem5}>
            <Button
                buttonType='Apple'
                clicked={() => this.openModal()}>
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
        <Divider orientation='h' space='1' />
        <div className={classes.TableSingleRowItem4}>2 Jan, 2020</div>
        <Divider orientation='h' space='1' />
        <div className={classes.TableSingleRowItem4}>20 Jan, 2020</div>
    </div>