import React from 'react'
import {useFormikContext} from 'formik'

import AppPicker from '../AppPicker'
import AppErrorMessage from './AppErrorMessage';


export default function AppFormPicker({fieldName, size=20, placeholder,
                                        categories,width, numberOfColumns, 
                                        PickerItemComponent, ...otherProps}) {
    const  {setFieldValue, values, errors,touched} = useFormikContext()
    const handleSelected = (item) =>{
        setFieldValue(fieldName,item)
    }
    return (
        <React.Fragment>
            <AppPicker
                categories={categories}
                onSelectItem={(item)=> handleSelected(item)}
                selectedItem={values[fieldName]}  
                size={size}
                placeholder={placeholder}
                width={width}
                numberOfColumns={numberOfColumns}
                PickerItemComponent={PickerItemComponent}
                {...otherProps}  
            />
                <AppErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
        </React.Fragment>
    )
}
