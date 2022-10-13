/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
    * Este es el mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    *Este es el tamano para la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   *Este es el color para la etiqueta
   */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    *Si quiere todo capitalizado
    */
    allCaps?: boolean;
    /**
    * Customizar color de la etiqueta
    */
    fontColor?: string;
    /**
   * Customizar color de la etiqueta
   */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, fontColor, label, size, backgroundColor }: Props) => JSX.Element;
