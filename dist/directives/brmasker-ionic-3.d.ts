import { OnInit, ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class BrMaskModel {
    mask: string;
    len: number;
    person: boolean;
    phone: boolean;
    phoneNotDDD: boolean;
    money: boolean;
    percent: boolean;
    type: 'alfa' | 'num' | 'all';
    decimal: number;
    decimalCaracter: string;
    thousand: string;
    userCaracters: boolean;
    numberAndTousand: boolean;
    acceptAll: boolean;
}
export declare class BrMaskerIonic3 implements OnInit, ControlValueAccessor {
    private _renderer;
    private _elementRef;
    brmasker: BrMaskModel;
    inputKeyup(event: any): void;
    inputOnblur(event: any): void;
    inputFocus(event: any): void;
    constructor(_renderer: Renderer, _elementRef: ElementRef);
    ngOnInit(): void;
    writeValue(fn: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeCreateValue(value: string, config?: BrMaskModel): any;
    writeValuePercent(value: string): string;
    writeValuePerson(value: string): string;
    writeValueMoney(value: string, config?: BrMaskModel): string;
    returnValue(value: string): any;
    private percentMask(v);
    private phoneMask(v);
    private phoneNotDDDMask(v);
    private peapollMask(v);
    private moneyMask(value, config);
    private onInput(value);
    private thousand(value);
    private usingSpecialCharacters(campo, Mascara, tamanho);
    private formatField(campo, Mascara, tamanho);
}
