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
}


export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    fontColor,
    label = 'No label',
    size = 'normal'
}: Props) => {

    return (
        <span 
            className={`label ${size} text-${color}`}
            style={{ color: fontColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
