import React from 'react'
import {useFormikContext} from 'formik'

import AppPicker from '../AppPicker'
import AppErrorMessage from './AppErrorMessage';


export default function AppFormPicker({fieldName, size=20, placeholder,categories, ...otherProps}) {
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
                {...otherProps}  
            />
                <AppErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
        </React.Fragment>
    )
}
