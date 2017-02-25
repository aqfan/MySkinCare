/*Type definitions for Survey JavaScript library v0.12.1
Project: http://surveyjs.org/
Definitions by: Devsoft Baltic O� <https://github.com/surveyjs/>
*/
// Dependencies for this module:
//   ../../../../react

import * as React from "react";
import * as React from 'react';

import './chunks/localization';

import "../../main.scss";

export var __assign: any;
export function __extends(thisClass: any, baseClass: any): void;
export var __decorate: (decorators: any, target: any, key: any, desc: any) => any;

export declare var surveyCss: {
    currentType: string;
    getCss: () => any;
};
export declare var defaultStandardCss: {
    root: string;
    header: string;
    body: string;
    footer: string;
    navigationButton: string;
    navigation: {
        complete: string;
        prev: string;
        next: string;
    };
    progress: string;
    progressBar: string;
    pageTitle: string;
    row: string;
    question: {
        root: string;
        title: string;
        comment: string;
        indent: number;
    };
    error: {
        root: string;
        icon: string;
        item: string;
    };
    checkbox: {
        root: string;
        item: string;
        other: string;
    };
    comment: string;
    dropdown: string;
    matrix: {
        root: string;
    };
    matrixdropdown: {
        root: string;
    };
    matrixdynamic: {
        root: string;
        button: string;
    };
    multipletext: {
        root: string;
        itemTitle: string;
        itemValue: string;
    };
    radiogroup: {
        root: string;
        item: string;
        other: string;
    };
    rating: {
        root: string;
        item: string;
    };
    text: string;
    window: {
        root: string;
        body: string;
        header: {
            root: string;
            title: string;
            button: string;
            buttonExpanded: string;
            buttonCollapsed: string;
        };
    };
};

export declare var defaultBootstrapCss: {
    root: string;
    header: string;
    body: string;
    footer: string;
    navigationButton: string;
    navigation: {
        complete: string;
        prev: string;
        next: string;
    };
    progress: string;
    progressBar: string;
    pageTitle: string;
    row: string;
    question: {
        root: string;
        title: string;
        comment: string;
        indent: number;
    };
    error: {
        root: string;
        icon: string;
        item: string;
    };
    checkbox: {
        root: string;
        item: string;
        other: string;
    };
    comment: string;
    dropdown: string;
    matrix: {
        root: string;
    };
    matrixdropdown: {
        root: string;
    };
    matrixdynamic: {
        root: string;
        button: string;
    };
    multipletext: {
        root: string;
        itemTitle: string;
        itemValue: string;
    };
    radiogroup: {
        root: string;
        item: string;
        other: string;
    };
    rating: {
        root: string;
        item: string;
    };
    text: string;
    window: {
        root: string;
        body: string;
        header: {
            root: string;
            title: string;
            button: string;
            buttonExpanded: string;
            buttonCollapsed: string;
        };
    };
};

export declare class Survey extends React.Component<any, any> implements ISurveyCreator {
    static cssType: string;
    protected survey: ReactSurveyModel;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): JSX.Element;
    css: any;
    protected renderCompleted(): JSX.Element;
    protected renderLoading(): JSX.Element;
    protected renderSurvey(): JSX.Element;
    protected renderTitle(): JSX.Element;
    protected renderPage(): JSX.Element;
    protected renderProgress(isTop: boolean): JSX.Element;
    protected renderNavigation(): JSX.Element;
    protected renderEmptySurvey(): JSX.Element;
    protected updateSurvey(newProps: any): void;
    protected setSurveyEvents(newProps: any): void;
    createQuestionElement(question: QuestionBase): JSX.Element;
    renderError(key: string, errorText: string): JSX.Element;
    questionTitleLocation(): string;
}

export declare class ReactSurveyModel extends SurveyModel {
    renderCallback: () => void;
    constructor(jsonObj?: any);
    render(): void;
    mergeCss(src: any, dest: any): void;
    doAfterRenderSurvey(el: any): void;
    protected onLoadSurveyFromService(): void;
    protected onLoadingSurveyFromService(): void;
}

export declare class SurveyNavigationBase extends React.Component<any, any> {
    protected survey: SurveyModel;
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

export declare class SurveyNavigation extends SurveyNavigationBase {
    constructor(props: any);
    handlePrevClick(event: any): void;
    handleNextClick(event: any): void;
    handleCompleteClick(event: any): void;
    render(): JSX.Element;
    protected renderButton(click: any, text: string, btnClassName: string): JSX.Element;
}

export declare class SurveyPage extends React.Component<any, any> {
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    render(): JSX.Element;
    protected createRow(row: QuestionRowModel, index: number): JSX.Element;
    protected renderTitle(): JSX.Element;
}
export declare class SurveyRow extends React.Component<any, any> {
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    protected createQuestion(question: QuestionBase): JSX.Element;
}

export interface ISurveyCreator {
    createQuestionElement(question: QuestionBase): JSX.Element;
    renderError(key: string, errorText: string): JSX.Element;
    questionTitleLocation(): string;
}
export declare class SurveyQuestion extends React.Component<any, any> {
    protected question: Question;
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    protected renderQuestion(): JSX.Element;
    protected shouldComponentUpdate(): boolean;
    protected renderTitle(): JSX.Element;
    protected renderComment(): JSX.Element;
    protected renderErrors(): JSX.Element;
}
export declare class SurveyQuestionErrors extends React.Component<any, any> {
    protected question: Question;
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}

export declare class SurveyElementBase extends React.Component<any, any> {
    protected css: any;
    protected rootCss: any;
    protected isDisplayMode: boolean;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
}
export declare class SurveyQuestionElementBase extends SurveyElementBase {
    protected questionBase: QuestionBase;
    protected creator: ISurveyCreator;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
}

export declare class SurveyQuestionComment extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionCommentModel;
    componentWillReceiveProps(nextProps: any): void;
    handleOnChange(event: any): void;
    handleOnBlur(event: any): void;
    render(): JSX.Element;
}
export declare class SurveyQuestionCommentItem extends SurveyElementBase {
    constructor(props: any);
    handleOnChange(event: any): void;
    handleOnBlur(event: any): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}

export declare class SurveyQuestionCheckbox extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionCheckboxModel;
    render(): JSX.Element;
    protected getItems(): Array<any>;
    protected readonly textStyle: any;
    protected renderItem(key: string, item: any, isFirst: boolean): JSX.Element;
}
export declare class SurveyQuestionCheckboxItem extends SurveyElementBase {
    protected question: QuestionCheckboxModel;
    protected item: ItemValue;
    protected textStyle: any;
    protected isFirst: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    handleOnChange(event: any): void;
    render(): JSX.Element;
    protected readonly inputStyle: any;
    protected renderCheckbox(isChecked: boolean, divStyle: any, otherItem: JSX.Element): JSX.Element;
    protected renderOther(): JSX.Element;
}

export declare class SurveyQuestionDropdown extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionDropdownModel;
    componentWillReceiveProps(nextProps: any): void;
    handleOnChange(event: any): void;
    render(): JSX.Element;
    protected renderSelect(): JSX.Element;
    protected renderOther(): JSX.Element;
}

export declare class SurveyQuestionMatrixDropdown extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionMatrixDropdownModel;
    render(): JSX.Element;
}
export declare class SurveyQuestionMatrixDropdownRow extends SurveyElementBase {
    protected creator: ISurveyCreator;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    protected renderSelect(cell: MatrixDropdownCell): JSX.Element;
}

export declare class SurveyQuestionMatrix extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionMatrixModel;
    render(): JSX.Element;
}
export declare class SurveyQuestionMatrixRow extends SurveyElementBase {
    constructor(props: any);
    handleOnChange(event: any): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}

export declare class SurveyQuestionHtml extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionHtmlModel;
    render(): JSX.Element;
}

export declare class SurveyQuestionFile extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionFileModel;
    handleOnChange(event: any): void;
    render(): JSX.Element;
    protected renderImage(): JSX.Element;
}

export declare class SurveyQuestionMultipleText extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionMultipleTextModel;
    render(): JSX.Element;
    protected renderRow(key: string, items: Array<MultipleTextItemModel>): JSX.Element;
    protected renderItem(item: MultipleTextItemModel, isFirst: boolean): JSX.Element;
}
export declare class SurveyQuestionMultipleTextItem extends SurveyElementBase {
    constructor(props: any);
    handleOnChange(event: any): void;
    handleOnBlur(event: any): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    protected readonly mainClassName: string;
}

export declare class SurveyQuestionRadiogroup extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionRadiogroupModel;
    componentWillReceiveProps(nextProps: any): void;
    handleOnChange(event: any): void;
    render(): JSX.Element;
    protected getItems(): Array<any>;
    protected readonly textStyle: any;
    protected renderRadio(key: string, item: ItemValue, isChecked: boolean, divStyle: any, otherItem: JSX.Element, isFirst: boolean): JSX.Element;
    protected renderOther(): JSX.Element;
}

export declare class SurveyQuestionText extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionTextModel;
    componentWillReceiveProps(nextProps: any): void;
    handleOnChange(event: any): void;
    handleOnBlur(event: any): void;
    render(): JSX.Element;
}

export declare class SurveyQuestionMatrixDynamic extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionMatrixDynamicModel;
    componentWillReceiveProps(nextProps: any): void;
    handleOnRowAddClick(event: any): void;
    render(): JSX.Element;
    protected renderAddRowButton(): JSX.Element;
}
export declare class SurveyQuestionMatrixDynamicRow extends SurveyElementBase {
    protected creator: ISurveyCreator;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    handleOnRowRemoveClick(event: any): void;
    render(): JSX.Element;
    protected renderQuestion(cell: MatrixDropdownCell): JSX.Element;
    protected renderButton(): JSX.Element;
}

export declare class SurveyProgress extends SurveyNavigationBase {
    protected isTop: boolean;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    protected readonly progress: number;
    protected readonly progressText: string;
    render(): JSX.Element;
}

export declare class SurveyQuestionRating extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionRatingModel;
    handleOnChange(event: any): void;
    render(): JSX.Element;
    protected renderItem(key: string, item: ItemValue, minText: string, maxText: string): JSX.Element;
    protected renderOther(): JSX.Element;
}

export declare class SurveyWindow extends Survey {
    constructor(props: any);
    handleOnExpanded(event: any): void;
    render(): JSX.Element;
    protected renderHeader(): JSX.Element;
    protected renderBody(): JSX.Element;
    protected updateSurvey(newProps: any): void;
}

export declare class ReactQuestionFactory {
    static Instance: ReactQuestionFactory;
    static DefaultChoices: string[];
    registerQuestion(questionType: string, questionCreator: (name: string) => JSX.Element): void;
    getAllTypes(): Array<string>;
    createQuestion(questionType: string, params: any): JSX.Element;
}

export declare class ValidatorResult {
    value: any;
    error: SurveyError;
    constructor(value: any, error?: SurveyError);
}
export declare class SurveyValidator extends Base {
    text: string;
    constructor();
    protected getErrorText(name: string): string;
    protected getDefaultErrorText(name: string): string;
    validate(value: any, name?: string): ValidatorResult;
}
export interface IValidatorOwner {
    validators: Array<SurveyValidator>;
    value: any;
    getValidatorTitle(): string;
}
export declare class ValidatorRunner {
    run(owner: IValidatorOwner): SurveyError;
}
export declare class NumericValidator extends SurveyValidator {
    minValue: number;
    maxValue: number;
    constructor(minValue?: number, maxValue?: number);
    getType(): string;
    validate(value: any, name?: string): ValidatorResult;
    protected getDefaultErrorText(name: string): any;
}
export declare class TextValidator extends SurveyValidator {
    minLength: number;
    maxLength: number;
    constructor(minLength?: number, maxLength?: number);
    getType(): string;
    validate(value: any, name?: string): ValidatorResult;
    protected getDefaultErrorText(name: string): any;
}
export declare class AnswerCountValidator extends SurveyValidator {
    minCount: number;
    maxCount: number;
    constructor(minCount?: number, maxCount?: number);
    getType(): string;
    validate(value: any, name?: string): ValidatorResult;
    protected getDefaultErrorText(name: string): string;
}
export declare class RegexValidator extends SurveyValidator {
    regex: string;
    constructor(regex?: string);
    getType(): string;
    validate(value: any, name?: string): ValidatorResult;
}
export declare class EmailValidator extends SurveyValidator {
    constructor();
    getType(): string;
    validate(value: any, name?: string): ValidatorResult;
    protected getDefaultErrorText(name: string): any;
}

export interface HashTable<T> {
    [key: string]: T;
}
export interface ISurveyData {
    getValue(name: string): any;
    setValue(name: string, newValue: any): any;
    getComment(name: string): string;
    setComment(name: string, newValue: string): any;
}
export interface ISurvey extends ISurveyData {
    currentPage: IPage;
    pageVisibilityChanged(page: IPage, newValue: boolean): any;
    questionVisibilityChanged(question: IQuestion, newValue: boolean): any;
    questionAdded(question: IQuestion, index: number): any;
    questionRemoved(question: IQuestion): any;
    validateQuestion(name: string): SurveyError;
    processHtml(html: string): string;
    processText(text: string): string;
    isDesignMode: boolean;
    requiredText: string;
    questionStartIndex: string;
    questionTitleTemplate: string;
    storeOthersAsComment: boolean;
    uploadFile(name: string, file: File, storeDataAsText: boolean, uploadingCallback: (status: string) => any): boolean;
    afterRenderQuestion(question: IQuestion, htmlElement: any): any;
}
export interface IConditionRunner {
    runCondition(values: HashTable<any>): any;
}
export interface IQuestion extends IConditionRunner {
    name: string;
    visible: boolean;
    hasTitle: boolean;
    setVisibleIndex(value: number): any;
    onSurveyValueChanged(newValue: any): any;
    onSurveyLoad(): any;
    supportGoNextPageAutomatic(): boolean;
}
export interface IPage extends IConditionRunner {
    visible: boolean;
}
export declare class ItemValue {
    static Separator: string;
    static setData(items: Array<ItemValue>, values: Array<any>): void;
    static getData(items: Array<ItemValue>): any;
    static getItemByValue(items: Array<ItemValue>, val: any): ItemValue;
    constructor(value: any, text?: string);
    getType(): string;
    value: any;
    readonly hasText: boolean;
    text: string;
}
export declare class Base {
    getType(): string;
    protected isTwoValueEquals(x: any, y: any): boolean;
}
export declare class SurveyError {
    getText(): string;
}
export declare const SurveyPageId = "sq_page";
export declare class SurveyElement {
    static ScrollElementToTop(elementId: string): boolean;
    static GetFirstNonTextElement(elements: any): any;
    static FocusElement(elementId: string): boolean;
}
export declare class Event<T extends Function, Options> {
    readonly isEmpty: boolean;
    fire(sender: any, options: Options): void;
    add(func: T): void;
    remove(func: T): void;
}

export declare class ChoicesRestfull extends Base {
    url: string;
    path: string;
    valueName: string;
    titleName: string;
    getResultCallback: (items: Array<ItemValue>) => void;
    error: SurveyError;
    constructor();
    run(): void;
    getType(): string;
    readonly isEmpty: boolean;
    setData(json: any): void;
    clear(): void;
    protected onLoad(result: any): void;
}

export declare class Condition {
    static operatorsValue: HashTable<Function>;
    static readonly operators: HashTable<Function>;
    left: any;
    right: any;
    operator: string;
    perform(left?: any, right?: any): boolean;
}
export declare class ConditionNode {
    children: Array<any>;
    constructor();
    connective: string;
    readonly isEmpty: boolean;
    clear(): void;
}
export declare class ConditionRunner {
    constructor(expression: string);
    expression: string;
    run(values: HashTable<any>): boolean;
}

export declare class ConditionsParser {
    parse(text: string, root: ConditionNode): boolean;
    toString(root: ConditionNode): string;
}

export declare class ProcessValue {
    constructor();
    getFirstName(text: string): string;
    hasValue(text: string, values: HashTable<any>): boolean;
    getValue(text: string, values: HashTable<any>): any;
}

export declare class AnswerRequiredError extends SurveyError {
    constructor();
    getText(): string;
}
export declare class RequreNumericError extends SurveyError {
    constructor();
    getText(): string;
}
export declare class ExceedSizeError extends SurveyError {
    constructor(maxSize: number);
    getText(): string;
}
export declare class CustomError extends SurveyError {
    constructor(text: string);
    getText(): string;
}

export declare class JsonObjectProperty {
    name: string;
    className: string;
    classNamePart: string;
    baseClassName: string;
    defaultValue: any;
    onGetValue: (obj: any) => any;
    onSetValue: (obj: any, value: any, jsonConv: JsonObject) => any;
    constructor(name: string);
    type: string;
    readonly hasToUseGetValue: (obj: any) => any;
    isDefaultValue(value: any): boolean;
    getValue(obj: any): any;
    readonly hasToUseSetValue: (obj: any, value: any, jsonConv: JsonObject) => any;
    setValue(obj: any, value: any, jsonConv: JsonObject): void;
    getObjType(objType: string): string;
    getClassName(className: string): string;
    readonly choices: Array<any>;
    setChoices(value: Array<any>, valueFunc: () => Array<any>): void;
}
export declare class JsonMetadataClass {
    name: string;
    creator: () => any;
    parentName: string;
    static requiredSymbol: string;
    static typeSymbol: string;
    properties: Array<JsonObjectProperty>;
    requiredProperties: Array<string>;
    constructor(name: string, properties: Array<any>, creator?: () => any, parentName?: string);
    find(name: string): JsonObjectProperty;
    createProperty(propInfo: any): JsonObjectProperty;
}
export declare class JsonMetadata {
    addClass(name: string, properties: Array<any>, creator?: () => any, parentName?: string): JsonMetadataClass;
    overrideClassCreatore(name: string, creator: () => any): void;
    getProperties(name: string): Array<JsonObjectProperty>;
    createClass(name: string): any;
    getChildrenClasses(name: string, canBeCreated?: boolean): Array<JsonMetadataClass>;
    getRequiredProperties(name: string): Array<string>;
    addProperty(className: string, propertyInfo: any): void;
    removeProperty(className: string, propertyName: string): boolean;
    findClass(name: string): JsonMetadataClass;
}
export declare class JsonError {
    type: string;
    message: string;
    description: string;
    at: Number;
    constructor(type: string, message: string);
    getFullDescription(): string;
}
export declare class JsonUnknownPropertyError extends JsonError {
    propertyName: string;
    className: string;
    constructor(propertyName: string, className: string);
}
export declare class JsonMissingTypeErrorBase extends JsonError {
    baseClassName: string;
    type: string;
    message: string;
    constructor(baseClassName: string, type: string, message: string);
}
export declare class JsonMissingTypeError extends JsonMissingTypeErrorBase {
    propertyName: string;
    baseClassName: string;
    constructor(propertyName: string, baseClassName: string);
}
export declare class JsonIncorrectTypeError extends JsonMissingTypeErrorBase {
    propertyName: string;
    baseClassName: string;
    constructor(propertyName: string, baseClassName: string);
}
export declare class JsonRequiredPropertyError extends JsonError {
    propertyName: string;
    className: string;
    constructor(propertyName: string, className: string);
}
export declare class JsonObject {
    static readonly metaData: JsonMetadata;
    errors: JsonError[];
    toJsonObject(obj: any): any;
    toObject(jsonObj: any, obj: any): void;
    protected toJsonObjectCore(obj: any, property: JsonObjectProperty): any;
    protected valueToJson(obj: any, result: any, property: JsonObjectProperty): void;
    protected valueToObj(value: any, obj: any, key: any, property: JsonObjectProperty): void;
}

export interface IMatrixDropdownData {
    onRowChanged(cell: MatrixDropdownRowModelBase, newRowValue: any): any;
    columns: Array<MatrixDropdownColumn>;
    createQuestion(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
}
export declare class MatrixDropdownColumn extends Base {
    name: string;
    optionsCaption: string;
    isRequired: boolean;
    hasOther: boolean;
    minWidth: string;
    cellType: string;
    constructor(name: string, title?: string);
    getType(): string;
    title: string;
    choices: Array<any>;
    colCount: number;
}
export declare class MatrixDropdownCell {
    column: MatrixDropdownColumn;
    row: MatrixDropdownRowModelBase;
    constructor(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, data: IMatrixDropdownData);
    readonly question: Question;
    value: any;
}
export declare class MatrixDropdownRowModelBase implements ISurveyData {
    protected data: IMatrixDropdownData;
    cells: Array<MatrixDropdownCell>;
    constructor(data: IMatrixDropdownData, value: any);
    readonly id: string;
    readonly rowName: any;
    value: any;
    getValue(name: string): any;
    setValue(name: string, newValue: any): void;
    getComment(name: string): string;
    setComment(name: string, newValue: string): void;
    readonly isEmpty: boolean;
    protected createCell(column: MatrixDropdownColumn): MatrixDropdownCell;
}
export declare class QuestionMatrixDropdownModelBase extends Question implements IMatrixDropdownData {
    name: string;
    protected generatedVisibleRows: Array<MatrixDropdownRowModelBase>;
    columnMinWidth: string;
    horizontalScroll: boolean;
    columnsChangedCallback: () => void;
    updateCellsCallbak: () => void;
    constructor(name: string);
    getType(): string;
    columns: Array<MatrixDropdownColumn>;
    cellType: string;
    columnColCount: number;
    getColumnTitle(column: MatrixDropdownColumn): string;
    getColumnWidth(column: MatrixDropdownColumn): string;
    choices: Array<any>;
    optionsCaption: string;
    addColumn(name: string, title?: string): MatrixDropdownColumn;
    readonly visibleRows: Array<MatrixDropdownRowModelBase>;
    protected generateRows(): Array<MatrixDropdownRowModelBase>;
    protected createMatrixRow(name: any, text: string, value: any): MatrixDropdownRowModelBase;
    protected createNewValue(curValue: any): any;
    protected getRowValue(row: MatrixDropdownRowModelBase, questionValue: any, create?: boolean): any;
    protected onBeforeValueChanged(val: any): void;
    protected onValueChanged(): void;
    supportGoNextPageAutomatic(): boolean;
    hasErrors(fireCallback?: boolean): boolean;
    protected getFirstInputElementId(): string;
    protected getFirstErrorInputElementId(): string;
    protected getFirstCellQuestion(onError: boolean): Question;
    createQuestion(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
    protected createQuestionCore(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
    protected getQuestionName(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): string;
    protected getColumnChoices(column: MatrixDropdownColumn): Array<any>;
    protected getColumnOptionsCaption(column: MatrixDropdownColumn): string;
    protected createDropdown(name: string, column: MatrixDropdownColumn): QuestionDropdownModel;
    protected createCheckbox(name: string, column: MatrixDropdownColumn): QuestionCheckboxModel;
    protected createRadiogroup(name: string, column: MatrixDropdownColumn): QuestionRadiogroupModel;
    protected createText(name: string, column: MatrixDropdownColumn): QuestionTextModel;
    protected createComment(name: string, column: MatrixDropdownColumn): QuestionCommentModel;
    protected createCellQuestion(questionType: string, name: string): Question;
    protected deleteRowValue(newValue: any, row: MatrixDropdownRowModelBase): any;
    onRowChanged(row: MatrixDropdownRowModelBase, newRowValue: any): void;
}

export declare class MatrixDropdownRowModel extends MatrixDropdownRowModelBase {
    name: any;
    text: string;
    constructor(name: any, text: string, data: IMatrixDropdownData, value: any);
    readonly rowName: any;
}
export declare class QuestionMatrixDropdownModel extends QuestionMatrixDropdownModelBase implements IMatrixDropdownData {
    name: string;
    constructor(name: string);
    getType(): string;
    rows: Array<any>;
    protected generateRows(): Array<MatrixDropdownRowModel>;
    protected createMatrixRow(name: any, text: string, value: any): MatrixDropdownRowModel;
}

export declare class MatrixDynamicRowModel extends MatrixDropdownRowModelBase {
    index: number;
    constructor(index: number, data: IMatrixDropdownData, value: any);
    readonly rowName: string;
}
export declare class QuestionMatrixDynamicModel extends QuestionMatrixDropdownModelBase implements IMatrixDropdownData {
    name: string;
    static MaxRowCount: number;
    minRowCount: number;
    rowCountChangedCallback: () => void;
    constructor(name: string);
    getType(): string;
    rowCount: number;
    addRow(): void;
    removeRow(index: number): void;
    addRowText: string;
    removeRowText: string;
    supportGoNextPageAutomatic(): boolean;
    readonly cachedVisibleRows: Array<MatrixDropdownRowModelBase>;
    protected onCheckForErrors(errors: Array<SurveyError>): void;
    protected generateRows(): Array<MatrixDynamicRowModel>;
    protected createMatrixRow(value: any): MatrixDynamicRowModel;
    protected onBeforeValueChanged(val: any): void;
    protected createNewValue(curValue: any): any;
    protected deleteRowValue(newValue: any, row: MatrixDropdownRowModelBase): any;
    protected getRowValue(row: MatrixDropdownRowModelBase, questionValue: any, create?: boolean): any;
}

export interface IMatrixData {
    onMatrixRowChanged(row: MatrixRowModel): any;
}
export declare class MatrixRowModel extends Base {
    name: any;
    text: string;
    fullName: string;
    protected rowValue: any;
    constructor(name: any, text: string, fullName: string, data: IMatrixData, value: any);
    value: any;
    protected onValueChanged(): void;
}
export declare class QuestionMatrixModel extends Question implements IMatrixData {
    name: string;
    isAllRowRequired: boolean;
    constructor(name: string);
    getType(): string;
    readonly hasRows: boolean;
    columns: Array<any>;
    rows: Array<any>;
    readonly visibleRows: Array<MatrixRowModel>;
    supportGoNextPageAutomatic(): boolean;
    protected onCheckForErrors(errors: Array<SurveyError>): void;
    protected createMatrixRow(name: any, text: string, fullName: string, value: any): MatrixRowModel;
    protected onValueChanged(): void;
    onMatrixRowChanged(row: MatrixRowModel): void;
}

export interface IMultipleTextData {
    getMultipleTextValue(name: string): any;
    setMultipleTextValue(name: string, value: any): any;
}
export declare class MultipleTextItemModel extends Base implements IValidatorOwner {
    name: any;
    placeHolder: string;
    validators: Array<SurveyValidator>;
    constructor(name?: any, title?: string);
    getType(): string;
    setData(data: IMultipleTextData): void;
    title: string;
    value: any;
    onValueChanged(newValue: any): void;
    getValidatorTitle(): string;
}
export declare class QuestionMultipleTextModel extends Question implements IMultipleTextData {
    name: string;
    colCountChangedCallback: () => void;
    itemSize: number;
    constructor(name: string);
    getType(): string;
    items: Array<MultipleTextItemModel>;
    addItem(name: string, title?: string): MultipleTextItemModel;
    supportGoNextPageAutomatic(): boolean;
    colCount: number;
    getRows(): Array<any>;
    protected onValueChanged(): void;
    protected createTextItem(name: string, title: string): MultipleTextItemModel;
    protected onItemValueChanged(): void;
    protected runValidators(): SurveyError;
    getMultipleTextValue(name: string): any;
    setMultipleTextValue(name: string, value: any): void;
}

export declare class QuestionRowModel {
    page: PageModel;
    question: QuestionBase;
    visibilityChangedCallback: () => void;
    constructor(page: PageModel, question: QuestionBase);
    questions: Array<QuestionBase>;
    visible: boolean;
    updateVisible(): void;
    addQuestion(q: QuestionBase): void;
    protected onVisibleChanged(): void;
    setWidth(): void;
}
export declare class PageModel extends Base implements IPage, IConditionRunner {
    name: string;
    questions: Array<QuestionBase>;
    data: ISurvey;
    visibleIf: string;
    navigationButtonsVisibility: string;
    title: string;
    visibleIndex: number;
    constructor(name?: string);
    readonly id: string;
    readonly rows: Array<QuestionRowModel>;
    readonly isActive: boolean;
    isQuestionVisible(question: QuestionBase): boolean;
    protected createRow(question: QuestionBase): QuestionRowModel;
    onRowVisibilityChanged(row: QuestionRowModel): void;
    readonly processedTitle: string;
    num: number;
    visible: boolean;
    getType(): string;
    readonly isVisible: boolean;
    getIsPageVisible(exceptionQuestion: IQuestion): boolean;
    addQuestion(question: QuestionBase, index?: number): void;
    addNewQuestion(questionType: string, name: string): QuestionBase;
    removeQuestion(question: QuestionBase): void;
    focusFirstQuestion(): void;
    focusFirstErrorQuestion(): void;
    scrollToTop(): void;
    hasErrors(fireCallback?: boolean, focuseOnFirstError?: boolean): boolean;
    addQuestionsToList(list: Array<IQuestion>, visibleOnly?: boolean): void;
    runCondition(values: HashTable<any>): void;
    protected onNumChanged(value: number): void;
}

export declare class Question extends QuestionBase implements IValidatorOwner {
    name: string;
    errors: Array<SurveyError>;
    validators: Array<SurveyValidator>;
    valueChangedCallback: () => void;
    commentChangedCallback: () => void;
    errorsChangedCallback: () => void;
    titleChangedCallback: () => void;
    constructor(name: string);
    readonly hasTitle: boolean;
    readonly hasInput: boolean;
    readonly inputId: string;
    title: string;
    readonly processedTitle: string;
    readonly fullTitle: string;
    focus(onError?: boolean): void;
    protected getFirstInputElementId(): string;
    protected getFirstErrorInputElementId(): string;
    protected canProcessedTextValues(name: string): boolean;
    protected getProcessedTextValue(name: string): any;
    supportComment(): boolean;
    supportOther(): boolean;
    isRequired: boolean;
    hasComment: boolean;
    commentText: string;
    hasOther: boolean;
    protected hasOtherChanged(): void;
    protected readonly no: string;
    protected onSetData(): void;
    value: any;
    comment: string;
    protected getComment(): string;
    protected setComment(newValue: string): void;
    isEmpty(): boolean;
    hasErrors(fireCallback?: boolean): boolean;
    readonly currentErrorCount: number;
    readonly requiredText: string;
    addError(error: SurveyError): void;
    protected onCheckForErrors(errors: Array<SurveyError>): void;
    protected hasRequiredError(): boolean;
    protected runValidators(): SurveyError;
    protected setNewValue(newValue: any): void;
    protected setNewValueInData(newValue: any): void;
    protected valueFromData(val: any): any;
    protected valueToData(val: any): any;
    protected onValueChanged(): void;
    protected setNewComment(newValue: string): void;
    onSurveyValueChanged(newValue: any): void;
    getValidatorTitle(): string;
}

export declare class QuestionBase extends Base implements IQuestion, IConditionRunner {
    name: string;
    protected data: ISurveyData;
    customWidget: QuestionCustomWidget;
    visibleIf: string;
    startWithNewLine: boolean;
    width: string;
    indent: number;
    focusCallback: () => void;
    renderWidthChangedCallback: () => void;
    rowVisibilityChangedCallback: () => void;
    visibilityChangedCallback: () => void;
    visibleIndexChangedCallback: () => void;
    constructor(name: string);
    visible: boolean;
    readonly visibleIndex: number;
    hasErrors(fireCallback?: boolean): boolean;
    readonly currentErrorCount: number;
    readonly hasTitle: boolean;
    readonly hasInput: boolean;
    readonly hasComment: boolean;
    readonly id: string;
    renderWidth: string;
    rightIndent: number;
    focus(onError?: boolean): void;
    setData(newValue: ISurveyData): void;
    readonly survey: ISurvey;
    protected fireCallback(callback: () => void): void;
    protected onSetData(): void;
    protected onCreating(): void;
    runCondition(values: HashTable<any>): void;
    onSurveyValueChanged(newValue: any): void;
    onSurveyLoad(): void;
    setVisibleIndex(value: number): void;
    supportGoNextPageAutomatic(): boolean;
}

export declare class QuestionSelectBase extends Question {
    protected cachedValue: any;
    otherItem: ItemValue;
    choicesByUrl: ChoicesRestfull;
    otherErrorText: string;
    storeOthersAsComment: boolean;
    choicesOrderValue: string;
    choicesChangedCallback: () => void;
    constructor(name: string);
    readonly isOtherSelected: boolean;
    protected getHasOther(val: any): boolean;
    protected createRestfull(): ChoicesRestfull;
    protected getComment(): string;
    protected setComment(newValue: string): void;
    protected setNewValue(newValue: any): void;
    protected valueFromData(val: any): any;
    protected valueToData(val: any): any;
    protected valueFromDataCore(val: any): any;
    protected valueToDataCore(val: any): any;
    protected hasUnknownValue(val: any): boolean;
    choices: Array<any>;
    protected hasOtherChanged(): void;
    choicesOrder: string;
    otherText: string;
    readonly visibleChoices: Array<ItemValue>;
    supportComment(): boolean;
    supportOther(): boolean;
    protected onCheckForErrors(errors: Array<SurveyError>): void;
    protected getStoreOthersAsComment(): boolean;
    onSurveyLoad(): void;
}
export declare class QuestionCheckboxBase extends QuestionSelectBase {
    name: string;
    colCountChangedCallback: () => void;
    constructor(name: string);
    colCount: number;
}

export declare class QuestionCheckboxModel extends QuestionCheckboxBase {
    name: string;
    constructor(name: string);
    protected getHasOther(val: any): boolean;
    protected valueFromDataCore(val: any): any;
    protected valueToDataCore(val: any): any;
    getType(): string;
}

export declare class QuestionCommentModel extends Question {
    name: string;
    rows: number;
    cols: number;
    placeHolder: string;
    constructor(name: string);
    getType(): string;
    isEmpty(): boolean;
}

export declare class QuestionDropdownModel extends QuestionSelectBase {
    name: string;
    constructor(name: string);
    optionsCaption: string;
    getType(): string;
    supportGoNextPageAutomatic(): boolean;
}

export declare class QuestionFactory {
    static Instance: QuestionFactory;
    static DefaultChoices: string[];
    registerQuestion(questionType: string, questionCreator: (name: string) => QuestionBase): void;
    getAllTypes(): Array<string>;
    createQuestion(questionType: string, name: string): QuestionBase;
}

export declare class QuestionFileModel extends Question {
    name: string;
    previewValueLoadedCallback: () => void;
    imageHeight: string;
    imageWidth: string;
    storeDataAsText: boolean;
    maxSize: number;
    constructor(name: string);
    getType(): string;
    showPreview: boolean;
    loadFile(file: File): void;
    previewValue: any;
    protected setFileValue(file: File): void;
    protected onCheckForErrors(errors: Array<SurveyError>): void;
}

export declare class QuestionHtmlModel extends QuestionBase {
    name: string;
    constructor(name: string);
    getType(): string;
    html: string;
    readonly processedHtml: string;
}

export declare class QuestionRadiogroupModel extends QuestionCheckboxBase {
    name: string;
    constructor(name: string);
    getType(): string;
    supportGoNextPageAutomatic(): boolean;
}

export declare class QuestionRatingModel extends Question {
    name: string;
    static defaultRateValues: ItemValue[];
    mininumRateDescription: string;
    maximumRateDescription: string;
    rateValuesChangedCallback: () => void;
    constructor(name: string);
    rateValues: Array<any>;
    readonly visibleRateValues: ItemValue[];
    getType(): string;
    supportComment(): boolean;
    supportOther(): boolean;
    supportGoNextPageAutomatic(): boolean;
}

export declare class QuestionTextModel extends Question {
    name: string;
    size: number;
    inputType: string;
    placeHolder: string;
    constructor(name: string);
    getType(): string;
    isEmpty(): boolean;
    supportGoNextPageAutomatic(): boolean;
    protected setNewValue(newValue: any): void;
    protected correctValueType(newValue: any): any;
}

export declare class SurveyModel extends Base implements ISurvey, ISurveyTriggerOwner {
    surveyId: string;
    surveyPostId: string;
    clientId: string;
    cookieName: string;
    sendResultOnPageNext: boolean;
    commentPrefix: string;
    title: string;
    focusFirstQuestionAutomatic: boolean;
    showNavigationButtons: boolean;
    showTitle: boolean;
    showPageTitles: boolean;
    completedHtml: string;
    requiredText: string;
    questionStartIndex: string;
    questionTitleTemplate: string;
    showProgressBar: string;
    storeOthersAsComment: boolean;
    goNextPageAutomatic: boolean;
    pages: Array<PageModel>;
    triggers: Array<SurveyTrigger>;
    clearInvisibleValues: boolean;
    onComplete: Event<(sender: SurveyModel) => any, any>;
    onPartialSend: Event<(sender: SurveyModel) => any, any>;
    onCurrentPageChanged: Event<(sender: SurveyModel, options: any) => any, any>;
    onValueChanged: Event<(sender: SurveyModel, options: any) => any, any>;
    onVisibleChanged: Event<(sender: SurveyModel, options: any) => any, any>;
    onPageVisibleChanged: Event<(sender: SurveyModel, options: any) => any, any>;
    onQuestionAdded: Event<(sender: SurveyModel, options: any) => any, any>;
    onQuestionRemoved: Event<(sender: SurveyModel, options: any) => any, any>;
    onValidateQuestion: Event<(sender: SurveyModel, options: any) => any, any>;
    onServerValidateQuestions: (sender: SurveyModel, options: any) => any;
    onProcessHtml: Event<(sender: SurveyModel, options: any) => any, any>;
    onSendResult: Event<(sender: SurveyModel, options: any) => any, any>;
    onGetResult: Event<(sender: SurveyModel, options: any) => any, any>;
    onUploadFile: Event<(sender: SurveyModel, options: any) => any, any>;
    onAfterRenderSurvey: Event<(sender: SurveyModel, options: any) => any, any>;
    onAfterRenderPage: Event<(sender: SurveyModel, options: any) => any, any>;
    onAfterRenderQuestion: Event<(sender: SurveyModel, options: any) => any, any>;
    jsonErrors: Array<JsonError>;
    constructor(jsonObj?: any);
    getType(): string;
    locale: string;
    getLocString(str: string): any;
    readonly emptySurveyText: string;
    pagePrevText: string;
    pageNextText: string;
    completeText: string;
    showPageNumbers: boolean;
    showQuestionNumbers: string;
    readonly processedTitle: string;
    questionTitleLocation: string;
    mode: string;
    data: any;
    readonly comments: any;
    readonly visiblePages: Array<PageModel>;
    readonly isEmpty: boolean;
    readonly PageCount: number;
    readonly visiblePageCount: number;
    currentPage: PageModel;
    currentPageNo: number;
    focusFirstQuestion(): void;
    readonly state: string;
    clear(clearData?: boolean, gotoFirstPage?: boolean): void;
    protected mergeValues(src: any, dest: any): void;
    protected updateCustomWidgets(page: PageModel): void;
    protected currentPageChanged(newValue: PageModel, oldValue: PageModel): void;
    getProgress(): number;
    readonly isNavigationButtonsShowing: boolean;
    readonly isEditMode: boolean;
    readonly isDisplayMode: boolean;
    readonly isDesignMode: boolean;
    setDesignMode(value: boolean): void;
    readonly hasCookie: boolean;
    setCookie(): void;
    deleteCookie(): void;
    nextPage(): boolean;
    readonly isCurrentPageHasErrors: boolean;
    prevPage(): boolean;
    completeLastPage(): boolean;
    readonly isFirstPage: boolean;
    readonly isLastPage: boolean;
    doComplete(): void;
    readonly isValidatingOnServer: boolean;
    protected onIsValidatingOnServerChanged(): void;
    protected doServerValidation(): boolean;
    protected doNextPage(): void;
    protected setCompleted(): void;
    readonly processedCompletedHtml: string;
    readonly processedLoadingHtml: string;
    readonly progressText: string;
    protected afterRenderSurvey(htmlElement: any): void;
    afterRenderPage(htmlElement: any): void;
    afterRenderQuestion(question: IQuestion, htmlElement: any): void;
    uploadFile(name: string, file: File, storeDataAsText: boolean, uploadingCallback: (status: string) => any): boolean;
    protected uploadFileCore(name: string, file: File, uploadingCallback: (status: string) => any): void;
    getPage(index: number): PageModel;
    addPage(page: PageModel): void;
    addNewPage(name: string): PageModel;
    removePage(page: PageModel): void;
    getQuestionByName(name: string, caseInsensitive?: boolean): IQuestion;
    getQuestionsByNames(names: string[], caseInsensitive?: boolean): IQuestion[];
    getPageByQuestion(question: IQuestion): PageModel;
    getPageByName(name: string): PageModel;
    getPagesByNames(names: string[]): PageModel[];
    getAllQuestions(visibleOnly?: boolean): Array<IQuestion>;
    protected createNewPage(name: string): PageModel;
    protected doSurveyValueChanged(question: IQuestion, newValue: any): void;
    sendResult(postId?: string, clientId?: string, isPartialCompleted?: boolean): void;
    getResult(resultId: string, name: string): void;
    loadSurveyFromService(surveyId?: string): void;
    protected onLoadingSurveyFromService(): void;
    protected onLoadSurveyFromService(): void;
    protected onBeforeCreating(): void;
    protected onCreating(): void;
    getVariable(name: string): any;
    setVariable(name: string, newValue: any): void;
    getValue(name: string): any;
    setValue(name: string, newValue: any): void;
    getComment(name: string): string;
    setComment(name: string, newValue: string): void;
    questionVisibilityChanged(question: IQuestion, newValue: boolean): void;
    pageVisibilityChanged(page: IPage, newValue: boolean): void;
    questionAdded(question: IQuestion, index: number): void;
    questionRemoved(question: IQuestion): void;
    validateQuestion(name: string): SurveyError;
    processHtml(html: string): string;
    processText(text: string): string;
    getObjects(pages: string[], questions: string[]): any[];
    setTriggerValue(name: string, value: any, isVariable: boolean): void;
}

export declare class Trigger extends Base {
    static operatorsValue: HashTable<Function>;
    static readonly operators: HashTable<Function>;
    value: any;
    constructor();
    operator: string;
    check(value: any): void;
    protected onSuccess(): void;
    protected onFailure(): void;
}
export interface ISurveyTriggerOwner {
    getObjects(pages: string[], questions: string[]): any[];
    doComplete(): any;
    setTriggerValue(name: string, value: any, isVariable: boolean): any;
}
export declare class SurveyTrigger extends Trigger {
    name: string;
    protected owner: ISurveyTriggerOwner;
    constructor();
    setOwner(owner: ISurveyTriggerOwner): void;
    readonly isOnNextPage: boolean;
}
export declare class SurveyTriggerVisible extends SurveyTrigger {
    pages: string[];
    questions: string[];
    constructor();
    getType(): string;
    protected onSuccess(): void;
    protected onFailure(): void;
    protected onItemSuccess(item: any): void;
    protected onItemFailure(item: any): void;
}
export declare class SurveyTriggerComplete extends SurveyTrigger {
    constructor();
    getType(): string;
    readonly isOnNextPage: boolean;
    protected onSuccess(): void;
}
export declare class SurveyTriggerSetValue extends SurveyTrigger {
    setToName: string;
    setValue: any;
    isVariable: boolean;
    constructor();
    getType(): string;
    protected onSuccess(): void;
}

export declare class SurveyWindowModel extends Base {
    static surveyElementName: string;
    surveyValue: SurveyModel;
    windowElement: HTMLDivElement;
    isShowingValue: boolean;
    isExpandedValue: boolean;
    titleValue: string;
    templateValue: string;
    constructor(jsonObj: any);
    getType(): string;
    readonly survey: SurveyModel;
    readonly isShowing: boolean;
    readonly isExpanded: boolean;
    title: string;
    expand(): void;
    collapse(): void;
    protected createSurvey(jsonObj: any): SurveyModel;
    protected expandcollapse(value: boolean): void;
}

export declare class TextPreProcessorItem {
    start: number;
    end: number;
}
export declare class TextPreProcessor {
    onProcess: (name: string) => any;
    onHasValue: (name: string) => boolean;
    constructor();
    process(text: string): string;
}

export declare class dxSurveyService {
    static serviceUrl: string;
    constructor();
    loadSurvey(surveyId: string, onLoad: (success: boolean, result: string, response: any) => void): void;
    sendResult(postId: string, result: JSON, onSendResult: (success: boolean, response: any) => void, clientId?: string, isPartialCompleted?: boolean): void;
    sendFile(postId: string, file: File, onSendFile: (success: boolean, response: any) => void): void;
    getResult(resultId: string, name: string, onGetResult: (success: boolean, data: any, dataList: Array<any>, response: any) => void): void;
    isCompleted(resultId: string, clientId: string, onIsCompleted: (success: boolean, result: string, response: any) => void): void;
}

export declare var surveyLocalization: {
    currentLocale: string;
    locales: {};
    getString: (strName: string) => any;
    getLocales: () => string[];
};
export declare var surveyStrings: {
    pagePrevText: string;
    pageNextText: string;
    completeText: string;
    otherItemText: string;
    progressText: string;
    emptySurvey: string;
    completingSurvey: string;
    loadingSurvey: string;
    optionsCaption: string;
    requiredError: string;
    requiredInAllRowsError: string;
    numericError: string;
    textMinLength: string;
    textMaxLength: string;
    textMinMaxLength: string;
    minRowCountError: string;
    minSelectError: string;
    maxSelectError: string;
    numericMinMax: string;
    numericMin: string;
    numericMax: string;
    invalidEmail: string;
    urlRequestError: string;
    urlGetChoicesError: string;
    exceedMaxSize: string;
    otherRequiredError: string;
    uploadingFile: string;
    addRow: string;
    removeRow: string;
};

export declare class QuestionCustomWidget {
    name: string;
    widgetJson: any;
    htmlTemplate: string;
    constructor(name: string, widgetJson: any);
    afterRender(question: IQuestion, el: any): void;
    isFit(question: IQuestion): boolean;
}
export declare class CustomWidgetCollection {
    static Instance: CustomWidgetCollection;
    onCustomWidgetAdded: Event<(customWidget: QuestionCustomWidget) => any, any>;
    readonly widgets: Array<QuestionCustomWidget>;
    addCustomWidget(widgetJson: any): void;
    clear(): void;
    getCustomWidget(question: IQuestion): QuestionCustomWidget;
}

