import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import Step1 from './AddFormSteps/Step1';
import Step2 from './AddFormSteps/Step2';
import Step3 from './AddFormSteps/Step3';
import Step4 from './AddFormSteps/Step4';
import Step5 from './AddFormSteps/Step5';
import Step6 from './AddFormSteps/Step6';
import classes from './CreateAdd.module.css';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';

export class CreateAddForm extends Component {
  constructor(props) {
    super(props)
    const { t } = this.props
    this.state = {
      step: 1,
      inputTypeFields: [],
      inputSubTypeFields: [],
      advertiseTasks: [
        {
          tasks: []
        },
        {
          tasks: []
        },
        {
          tasks: []
        },
      ],
      title: t('MyAds:CreateAdd.Step1.secondSection.fields.default'),
      description: '',
      select: [],
      type: '',
      sub_type: '',
      audience: '',
      visibility: '',
      selectedIndex: null,
      numberOfPackage: 1,
      delivery_types: [
        t('MyAds:CreateAdd.Step2.SinglePackageItem.durationTypes.0'),
        t('MyAds:CreateAdd.Step2.SinglePackageItem.durationTypes.1'),
        t('MyAds:CreateAdd.Step2.SinglePackageItem.durationTypes.2'),
        t('MyAds:CreateAdd.Step2.SinglePackageItem.durationTypes.3'),
        t('MyAds:CreateAdd.Step2.SinglePackageItem.durationTypes.4')],
      packagesData: [
        {
          type: t('MyAds:CreateAdd.Step2.packageTypes.0'),
          name: '',
          description: '',
          delivery_time: '',
          delivery_type: '',
          price: '',
          tasks: [],
        },
        {
          type: t('MyAds:CreateAdd.Step2.packageTypes.1'),
          name: '',
          description: '',
          delivery_time: '',
          delivery_type: '',
          price: '',
          tasks: [],
        },
        {
          type: t('MyAds:CreateAdd.Step2.packageTypes.2'),
          name: '',
          description: '',
          delivery_time: '',
          delivery_type: '',
          price: '',
          tasks: [],
        },
      ],
      selectedPackage: 1,
      advertiseSpecification: [
        { rule: '' },
        { rule: '' },
        { rule: '' },
        { rule: '' },
        { rule: '' },
      ],
      filesPreviews: { images: [], video: [] },
      files: { images: [], video: [] },
      filesSizeError: false
    }
  }

  componentDidMount() {
    this.props.onFetchTypeAndSubTypes();
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleAddTitleDescription = (event, name) => {
    if (name === 'title') {
      this.setState({
        title: event.target.value
      });
    } else if (name === 'description') {
      this.setState({
        description: event.target.value
      });
    }
  }

  handleTypeInputChange = (index, event) => {
    const inputValues = [...this.state.inputTypeFields];
    inputValues[index].type = event.target.value;
    this.setState({ inputTypeFields: inputValues })
  }

  handleSubTypeInputChange = (index, event) => {
    const inputValues = [...this.state.inputSubTypeFields];
    inputValues[index].sub_type = event.target.value;
    this.setState({ inputSubTypeFields: inputValues })
  }

  handleAddFields = (name) => {
    const types = [...this.state.inputTypeFields];
    const subTypes = [...this.state.inputSubTypeFields];
    if (name === 'type') {
      types.push({ type: '' });
      this.setState({ inputTypeFields: types });
    } else if (name === 'sub_type') {
      subTypes.push({ sub_type: '' });
      this.setState({ inputSubTypeFields: subTypes });
    }
  }

  handleRemoveFields = (name) => {
    const types = [...this.state.inputTypeFields];
    const subTypes = [...this.state.inputSubTypeFields];
    if (name === 'type') {
      types.pop();
      this.setState({ inputTypeFields: types })
    }
    else if (name === 'sub_type') {
      subTypes.pop();
      this.setState({ inputSubTypeFields: subTypes });
    }
  }

  getSelectedOption = (event, name) => {
    if (name === 'type') {
      this.setState({
        selectedIndex: event.target.value,
        inputSubTypeFields: [],
        type: this.state.select[event.target.value].type
      });
    } else if (name === "sub_type") {
      const subTypes = [...this.state.select[this.state.selectedIndex].sub_type];
      this.setState({ sub_type: subTypes[event.target.value] })
    }
  }

  addType = () => {
    const selects = [...this.state.select];
    const typeAndSubtypes = []
    this.state.inputTypeFields.forEach(value => {
      const index = this.state.select.findIndex(existingValue => existingValue.type === value.type.toUpperCase());
      if (value.type.length !== 0 && index === -1) typeAndSubtypes.push({ type: value.type.toUpperCase(), sub_type: [] });
    });
    selects.push(...typeAndSubtypes);
    this.setState({ select: selects, inputTypeFields: [] });
    if (typeAndSubtypes.length !== 0) this.props.onSubmitTypeAndSubtype(typeAndSubtypes);
  }

  addSubType = () => {
    const selects = [...this.state.select];
    const alreadyHasSubTypes = [...selects[this.state.selectedIndex].sub_type];
    const subType = [];
    this.state.inputSubTypeFields.forEach(value => {
      const index = alreadyHasSubTypes.findIndex(existingValue => existingValue.toLowerCase() === value.sub_type.toLowerCase());
      if (value.sub_type.length !== 0 && index === -1) subType.push(value.sub_type);
    });
    alreadyHasSubTypes.push(...subType);
    selects[this.state.selectedIndex].sub_type = alreadyHasSubTypes;
    this.setState({
      select: selects,
      inputSubTypeFields: []
    });
    if (subType.length !== 0) this.props.onSubmitTypeAndSubtype([{ type: selects[this.state.selectedIndex].type, sub_type: selects[this.state.selectedIndex].sub_type }]);
  }
  handleAudienceAndVisibilityInput = () => {

  }
  getSelectedNumberOfPackage = (event) => {
    this.setState({
      numberOfPackage: parseInt(event.target.value),
    });
  }

  handlePackagesData = (event, packageType, text) => {
    const packageData = [...this.state.packagesData];
    const advertiseTasks = [...this.state.advertiseTasks];
    let selectedPackage = this.state.selectedPackage;
    if (text === 'tasks') {
      let tasks = [];
      advertiseTasks[packageType - 1].tasks.forEach(task => {
        if (task.confirmed_tasks.length !== 0) {
          tasks.push(task.confirmed_tasks);
        }
      });
      selectedPackage = packageType + 1;
      packageData[packageType - 1].tasks = tasks;
      advertiseTasks[packageType - 1].tasks = [];
    } else {
      packageData[packageType - 1][text] = event.target.value;
    }
    this.setState({
      packagesData: packageData,
      advertiseTasks: advertiseTasks,
      selectedPackage: selectedPackage
    });
  }

  handleTasksInputChange = (index, event, selectedPackage) => {
    const inputValues = [...this.state.advertiseTasks];
    inputValues[selectedPackage - 1].tasks[index].confirmed_tasks = event.target.value;
    this.setState({ advertiseTasks: inputValues });
  }

  handleAddTasksFields = (packageType) => {
    const values = [...this.state.advertiseTasks];
    let alreadyHas = [...values[packageType - 1].tasks];
    alreadyHas.push({ confirmed_tasks: '' });
    values[packageType - 1].tasks = alreadyHas;
    this.setState({ advertiseTasks: values });
  }

  handleRemoveTasksFields = (packageType) => {
    const values = [...this.state.advertiseTasks];
    let alreadyHas = [...values[packageType - 1].tasks];
    alreadyHas.pop();
    values[packageType - 1].tasks = alreadyHas;
    this.setState({ advertiseTasks: values });
  }

  advertiseSpecificationData = (event, index) => {
    const advertiseSpecification = [...this.state.advertiseSpecification];
    advertiseSpecification[index].rule = event.target.value;
    this.setState({
      advertiseSpecification: advertiseSpecification
    });
  }

  handleAdvertiseFiles = (event, type) => {
    if (event.target.files.length + this.state.filesPreviews.images.length > 3 && type === 'images') return alert('Your max files limit is three');
    if (event.target.files.length + this.state.filesPreviews.video.length > 1 && type === 'video') return alert('Your max files limit is one');

    const previews = { ...this.state.filesPreviews };
    const files = { ...this.state.files };

    let isSizeLarge = false;

    for (let i = 0; i < event.target.files.length; i++) {
      const size = (event.target.files[i].size / (1024 * 1024)).toFixed(2);
      if (size > 10) isSizeLarge = true;
      files[type].push({ file: event.target.files[i] });
      previews[type].push({ url: URL.createObjectURL(event.target.files[i]) });
    }
    this.setState({
      filesSizeError: isSizeLarge,
      filesPreviews: previews,
      files: files
    });
  }

  handleRemoveFile = (url, type, index) => {
    const previews = { ...this.state.filesPreviews };
    const files = { ...this.state.files };
    const filteredPreviews = previews[type].filter(previewFile => previewFile.url !== url);
    files[type].shift(index, 1);
    previews[type] = filteredPreviews;
    this.setState({ filesPreviews: previews, files: files });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const advertiseForm = new FormData();
    advertiseForm.append('title', this.state.title);
    advertiseForm.append('description', this.state.description);
    advertiseForm.append('type', this.state.type);
    advertiseForm.append('sub_type', this.state.sub_type);

    const filteredPackagesData = this.state.packagesData.filter(packageData => packageData.tasks.length !== 0);
    advertiseForm.append('packagesData', JSON.stringify(filteredPackagesData));

    for (let i = 0; i < this.state.files.images.length; i++) {
      advertiseForm.append('advertiseFiles', this.state.files.images[i].file);
    }
    if (this.state.files.video[0]) advertiseForm.append('advertiseFiles', this.state.files.video[0].file);
    const filteredAdvertiseSpecification = this.state.advertiseSpecification.filter(specification => specification.rule.length !== 0);
    advertiseForm.append('advertiseSpecification', JSON.stringify(filteredAdvertiseSpecification));

    this.props.onSubmitAdvertiseForm(advertiseForm);
  }

  render() {
    const { step } = this.state;
    if (this.props.advertiseData && this.state.select.length === 0) {
      this.setState({
        select: this.props.advertiseData
      });
    }
    const { t } = this.props;
    const { inputTypeFields, numberOfPackage, inputSubTypeFields, advertiseTasks, title, description, select, type, sub_type, selectedIndex, packagesData, selectedPackage,
      advertiseSpecification, delivery_types, price, filesPreviews, filesSizeError } = this.state;

    const values = {
      inputTypeFields, numberOfPackage, inputSubTypeFields, advertiseTasks, title, description, select, type, sub_type, selectedIndex, packagesData, selectedPackage,
      advertiseSpecification, delivery_types, price, filesPreviews, filesSizeError
    };
    switch (step) {
      case 1:
        return <div className={classes.CreateAdd}>
          <div className={classes.CreateAddItems}>
            <div className={classes.CreateAddItemsStyle}>
              <h4>{t('MyAds:CreateAdd.title')}</h4>
              <br />
              <Step1
                nextStep={this.nextStep}
                handleAddTitleDescription={this.handleAddTitleDescription}
                getSelectedOption={this.getSelectedOption}
                handleAddFields={this.handleAddFields}
                handleRemoveFields={this.handleRemoveFields}
                handleTypeInputChange={this.handleTypeInputChange}
                addType={this.addType}
                addSubType={this.addSubType}
                handleSubTypeInputChange={this.handleSubTypeInputChange}
                values={values}
                error={this.props.error}
                message={this.props.message}
                step={this.state.step}
                t={t}
              />
            </div>
          </div>
        </div>
      case 2:
        return <div className={classes.CreateAdd}>
          <div className={classes.CreateAddItems}>
            <div className={classes.CreateAddItemsStyle}>
              <h4>{t('MyAds:CreateAdd.title')}</h4>
              <br />
              <Step2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleAudienceAndVisibilityInput={this.handleAudienceAndVisibilityInput}
                values={values}
                step={this.state.step}
                t={t}
              />
            </div>
          </div>
        </div>
      case 3:
        return <div className={classes.CreateAdd}>
          <div className={classes.CreateAddItems}>
            <div className={classes.CreateAddItemsStyle}>
              <h4>{t('MyAds:CreateAdd.title')}</h4>
              <br />
              <Step3
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                getSelectedNumberOfPackage={this.getSelectedNumberOfPackage}
                handlePackagesData={this.handlePackagesData}
                handleAddTasksFields={this.handleAddTasksFields}
                handleTasksInputChange={this.handleTasksInputChange}
                handleRemoveTasksFields={this.handleRemoveTasksFields}
                values={values}
                step={this.state.step}
                t={t}
              />
            </div>
          </div>
        </div>
      case 4:
        return <div className={classes.CreateAdd}>
          <div className={classes.CreateAddItems}>
            <div className={classes.CreateAddItemsStyle}>
              <h4>{t('MyAds:CreateAdd.title')}</h4>
              <br />
              <Step4
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                advertiseSpecificationData={this.advertiseSpecificationData}
                handleAdvertiseFiles={this.handleAdvertiseFiles}
                handleRemoveFile={this.handleRemoveFile}
                values={values}
                step={this.state.step}
                t={t}
              />
            </div>
          </div>
        </div>
      case 5:
        return <div className={classes.CreateAdd}>
          <div className={classes.CreateAddItems}>
            <div className={classes.CreateAddItemsStyle}>
              <h4>{t('MyAds:CreateAdd.title')}</h4>
              <br />
              <Step5
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                handleFormSubmit={this.handleFormSubmit}
                step={this.state.step}
                t={t} />
            </div>
          </div>
        </div>
      case 6:
        return <div className={classes.CreateAdd}>
          <div className={classes.CreateAddItems}>
            <div className={classes.CreateAddItemsStyle}>
              <h4>{t('MyAds:CreateAdd.title')}</h4>
              <br />
              <Step6
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                history={this.props.history}
                step={this.state.step}
                loading={this.props.loading}
                error={this.props.error}
                message={this.props.message}
                loading_percentage={this.props.loading_percentage}
                t={t} />
            </div>
          </div>
        </div>
      default:
        console.log('This is a multi-step form built with React.')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.dashboardAdvertise.loading,
    error: state.dashboardAdvertise.error,
    message: state.dashboardAdvertise.message,
    advertiseData: state.dashboardAdvertise.advertiseData,
    loading_percentage: state.dashboardAdvertise.loading_percentage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTypeAndSubTypes: () => dispatch(actions.fetchTypeAndSubtypes()),
    onSubmitTypeAndSubtype: (typeAndSubtypes) => dispatch(actions.updateTypeAndSubtypes(typeAndSubtypes)),
    onSubmitAdvertiseForm: (body) => dispatch(actions.onSubmitAdvertiseForm(body))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation(['translation', 'MyAds'])(CreateAddForm));
